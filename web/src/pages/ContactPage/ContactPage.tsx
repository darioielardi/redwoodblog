import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms';
import { useMutation } from '@redwoodjs/web';
import { toast, Toaster } from '@redwoodjs/web/toast';
import React from 'react';
import { useForm } from 'react-hook-form';

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`;

const ContactPage = () => {
  const form = useForm();

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!');
    },
  });

  const onSubmit = (data) => {
    console.log({ data });
    create({ variables: { input: data } });
  };

  return (
    <>
      <Toaster />

      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        formMethods={form}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <Label name="name">Name</Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email">Email</Label>
        <TextField
          name="email"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message">Message</Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  );
};

export default ContactPage;

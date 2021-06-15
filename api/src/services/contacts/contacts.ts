import { BeforeResolverSpecType, UserInputError } from '@redwoodjs/api';
import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';
import type {
  CreateContactInput,
  MutationCreateContactArgs,
} from 'types/graphql';

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth);
};

export const contacts = () => {
  return db.contact.findMany();
};

const validate = (input: CreateContactInput) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    });
  }
};

export const createContact = ({ input }: MutationCreateContactArgs) => {
  validate(input);
  return db.contact.create({ data: input });
};

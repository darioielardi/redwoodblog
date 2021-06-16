import { Prisma } from '@prisma/client';
import { BeforeResolverSpecType } from '@redwoodjs/api';
import { ResolverArgs } from '@redwoodjs/api/dist/types';
import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth);
};

export const comments = () => {
  return db.comment.findMany();
};

export const createComment = (params: {
  input: Prisma.CommentUncheckedCreateInput;
}) => {
  return db.comment.create({
    data: params.input,
  });
};

export const deleteComment = ({ id }: { id: number }) => {
  return db.comment.delete({
    where: { id },
  });
};

export const Comment = {
  post: (_obj, { root }: ResolverArgs<Prisma.CommentWhereUniqueInput>) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
};

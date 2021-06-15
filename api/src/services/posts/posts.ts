import { Prisma } from '@prisma/client';
import { BeforeResolverSpecType } from '@redwoodjs/api';
import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth);
};

export const posts = () => {
  return db.post.findMany();
};

export const post = ({ id }: Prisma.PostWhereUniqueInput) => {
  return db.post.findUnique({
    where: { id },
  });
};

interface CreatePostArgs {
  input: Prisma.PostCreateInput;
}

export const createPost = ({ input }: CreatePostArgs) => {
  requireAuth();
  return db.post.create({
    data: input,
  });
};

interface UpdatePostArgs extends Prisma.PostWhereUniqueInput {
  input: Prisma.PostUpdateInput;
}

export const updatePost = ({ id, input }: UpdatePostArgs) => {
  requireAuth();
  return db.post.update({
    data: input,
    where: { id },
  });
};

export const deletePost = ({ id }: Prisma.PostWhereUniqueInput) => {
  requireAuth();
  return db.post.delete({
    where: { id },
  });
};

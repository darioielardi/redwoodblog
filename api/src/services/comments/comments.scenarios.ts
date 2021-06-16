import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    jane: {
      name: 'Jane Doe',
      body: 'I like trees',
      post: {
        create: {
          title: 'Redwood Leaves',
          body: 'The quick brown fox jumped over the lazy dog.',
        },
      },
    },
    john: {
      name: 'John Doe',
      body: 'Hug a tree today',
      post: {
        create: {
          title: 'Root Systems',
          body: 'The five boxing wizards jump quickly.',
        },
      },
    },
  },
});

export type StandardScenario = typeof standard;

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      title: 'Bark',
      body: "A tree's bark is worse than its bite",
    },
  },
});

export type PostOnlyScenario = typeof postOnly;

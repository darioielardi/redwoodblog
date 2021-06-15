import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { title: 'String', body: 'String' },
    two: { title: 'String', body: 'String' },
  },
});

export type StandardScenario = typeof standard;

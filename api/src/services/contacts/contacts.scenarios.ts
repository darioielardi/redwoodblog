import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: { name: 'String', email: 'String', message: 'String' },
    two: { name: 'String', email: 'String', message: 'String' },
  },
});

export type StandardScenario = typeof standard;

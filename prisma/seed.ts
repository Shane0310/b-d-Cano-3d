/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seed = async () => {
  await prisma.post.createMany({
    data: [
      { title: 'title-1', content: 'dummy1' },
      { title: 'title-2', content: 'dummy2' },
      { title: 'title-3', content: 'dummy3' },
      { title: 'title-4', content: 'dummy4' },
    ],
  });
};
seed();
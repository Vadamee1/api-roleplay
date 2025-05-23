import { PrismaClient } from '@prisma/client';
import usersSeed from './users';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    await usersSeed(tx);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { Prisma } from '@prisma/client';
import { users } from './data/users';

export default async function usersSeed(tx: Prisma.TransactionClient) {
  try {
    await Promise.all(
      Object.values(users).map((i) =>
        tx.user.upsert({
          create: {
            id: i.id,
            name: i.name,
            email: i.email,
            password: i.password,
          },
          update: {},
          where: { id: i.id },
        }),
      ),
    );
  } catch (error) {
    console.log(error);
  }
}

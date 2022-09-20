// const { offers, users } = require('./data');
// const prisma = require('@lib/prisma');

const { PrismaClient } = require('@prisma/client');
const { offers, users } = require('./data');
const prisma = new PrismaClient();

const load = async () => {
  try {
    // 🔥🔥🔥 Offers -->
    await prisma.offer.deleteMany();
    await prisma.user.deleteMany();

    // eslint-disable-next-line no-console
    console.log('👉 previous offers,users are deleted 💥');

    await prisma.$queryRaw`ALTER TABLE Offer AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;

    await prisma.offer.createMany({
      data: offers,
    });
    await prisma.user.createMany({
      data: users,
    });
    // eslint-disable-next-line no-console
    console.log('👉 new offers,users are created 🌟');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();

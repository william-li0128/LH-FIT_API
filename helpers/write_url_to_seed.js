const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function main() {
  // Retrieve data from Prisma
  const data = await prisma.exercise.findMany();

  // Write data to file
  fs.writeFileSync('seed-data.json', JSON.stringify(data));

  console.log('Seed data written to file');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
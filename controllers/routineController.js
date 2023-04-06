const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getRoutines(req, res) {
  const routines = await prisma.routine.findMany();
  res.json(routines);
}

module.exports = { getRoutines }
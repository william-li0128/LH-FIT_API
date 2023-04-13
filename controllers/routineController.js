const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getRoutines(req, res) {
  const routines = await prisma.routine.findMany();
  res.json(routines);
}

async function getRoutinesByEmail(req, res) {
  const { email } = req.query; 
  const routines = await prisma.routine.findMany({
    include: {
      user: true,
    },
    where: {
      user: {
        email: { 
          contains: email?.toLowerCase(),
          mode: 'insensitive',
        },
      }
    },
  });
  res.json(routines)
}

module.exports = { getRoutines, getRoutinesByEmail }
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getRoutines(req, res) {
  const routines = await prisma.routine.findMany();
  res.json(routines);
}

async function createRoutine(req, res) {

  try {

    const body = req.body;
  
    const routine = await prisma.routine.create({
      data: {
        name: body.name,
        userId: parseInt(body.userId),
      },
    });
  
    res.json(routine.id);
  } catch (error) {
    return res.status(401).json({ message: `'rountine setting failed': ${req.data}` });
  }
}

async function getRoutinesByID(req, res) {
  const { id } = req.query; 
  const routines = await prisma.routine.findMany({
    include: {
      user: true,
    },
    where: {
      user: {
        id: parseInt(id),
      }
    },
  });
  res.json(routines)
}

module.exports = { getRoutines, getRoutinesByID, createRoutine }
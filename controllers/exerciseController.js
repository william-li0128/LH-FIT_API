const { Prisma, PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getExercises(req, res) {
  const { name } = req.query; 
  const exercises = await prisma.exercise.findMany({
    take: 10,
    where: {
      name: { 
        contains: name
       }
    }
    });
  res.json(exercises)
}

module.exports = { getExercises }
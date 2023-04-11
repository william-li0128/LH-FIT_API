const { Prisma, PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getExercisesByQueries(req, res) {
  const { name, muscle, difficulty } = req.query; 
  const exercises = await prisma.exercise.findMany({
    take: 10,
    where: {
      name: { 
        contains: name?.toLowerCase(),
        mode: 'insensitive',
      },
      muscle: muscle,
      difficulty: difficulty,
    }
  });
  console.log(exercises);
  res.json(exercises)
}

async function findExercisesByID(req, res) {
  const { id } = req.params; 
  const exercises = await prisma.exercise.findUnique({
    where: {
      id: parseInt(id),
    },
    });
  res.json(exercises)
}

module.exports = { 
  getExercisesByQueries,
  findExercisesByID
}
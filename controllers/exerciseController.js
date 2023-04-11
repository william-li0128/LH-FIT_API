const { Prisma, PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getExercisesByQueries(req, res) {
  const { muscle, difficulty } = req.query; 
  const exercises = await prisma.exercise.findMany({
    take: 10,
    where: {
      muscle: muscle,
      difficulty: difficulty,
    }
  });
  console.log(exercises);
  res.json(exercises)
}

async function getExercisesBySearch(req, res) {
  const { search } = req.query; 
  const exercises = await prisma.exercise.findMany({
    take: 10,
    where: {
      OR: [
        { name: { 
          contains: search?.toLowerCase(),
          mode: 'insensitive',
        }, },
        { muscle: { 
          contains: search?.toLowerCase(),
          mode: 'insensitive',
        }, },
      ],
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
  getExercisesBySearch,
  findExercisesByID
}
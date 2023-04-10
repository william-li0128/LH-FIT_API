const { Prisma, PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getExercisesByName(req, res) {
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

async function findExercisesByID(req, res) {
  const { id } = req.params; 
  const exercises = await prisma.exercise.findUnique({
    where: {
      id: parseInt(id),
    },
    });
  res.json(exercises)
}

async function getExercisesByQueries(req, res) {
  const difficulty = req.params.queries; 
  console.log(difficulty);
  const exercises = await prisma.exercise.findMany({
    take: 10,
    where: {
      difficulty: difficulty,
    },
    });
  res.json(exercises)
}

module.exports = { 
  getExercisesByName,
  findExercisesByID, 
  getExercisesByQueries,
}
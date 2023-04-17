const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getEnrollments(req, res) {
  const enrollments = await prisma.enrollment.findMany();
  res.json(enrollments);
}

async function createEnrollments(req, res) {

  try {

    const body = req.body;

    const exercise = await prisma.exercise.findUnique({
      where: {
          name: body.name
      },
    });

    let weight = body.weight ? body.weight : -1;
    
    const enrollment = await prisma.enrollment.create({
      data: {
        routineId: parseInt(body.routineID),
        exerciseId: exercise.id,
        reps: parseInt(body.reps),
        sets: parseInt(body.sets),
        weight: parseInt(weight),
      },
    });
  
    res.json(enrollment.id);
  } catch (error) {
    return res.status(401).json({ message: `enrollment setting failed` });
  }
}

async function getExcercisesByRountineID(req, res) {
  const { id } = req.params; 
  const enrollments = await prisma.enrollment.findMany({
    where: {
        routineId: parseInt(id)
    },
  });

  const enrollmentExercisePromises = enrollments.map(async (enrollment) => {
    const exercise = await prisma.exercise.findUnique({
      where: {
        id: enrollment.exerciseId,
      },
    });
    return { ...enrollment, exercise };
  });
  const enrollmentAuthorResults = await Promise.all(enrollmentExercisePromises);
  const flattenedResults = enrollmentAuthorResults.flatMap((post) => post);
  res.json(flattenedResults);
  
  return flattenedResults;

}



module.exports = { getEnrollments, createEnrollments, getExcercisesByRountineID }
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getEnrollments(req, res) {
  const enrollments = await prisma.enrollment.findMany();
  res.json(enrollments);
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



module.exports = { getEnrollments, getExcercisesByRountineID }
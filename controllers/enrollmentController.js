const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getEnrollments(req, res) {
  const enrollments = await prisma.enrollment.findMany();
  res.json(enrollments);
}

module.exports = { getEnrollments }
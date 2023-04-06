const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getUsers(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}

async function findUserById(req, res) {
  const { id } = req.params;
  const user = await prisma.user.findMany({
    where: {
      id: parseInt(id),
    },
  });
  res.json(user);
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.json(user);
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const user = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      password,
    },
  });
  res.json(user);
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(user);
}

module.exports = {
  getUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};

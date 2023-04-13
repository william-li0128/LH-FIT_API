const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const hash_password = require("../helpers/hash_password")
const {compareBPasswords} = require("../helpers/hash_password")

const prisma = new PrismaClient();
const hashPassword = hash_password.hashPassword;

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
  try {
    const { name, email, password } = req.query;

    const hashedPassword = await hashPassword(password);
  
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
  
    res.json(user.id);
  } catch (error) {
    return res.status(401).json({ message: 'User Credentials are invalid try again!' });
  }

}

async function comparePasswords(req, res) {
  const { email, password } = req.query;
  //changes the email to lowercase if it exist and if it doesn't exist it will be an empty string
  const lowerCaseEmail = email?email.toLowerCase():'';
  const user = await prisma.user.findFirst({
    where: {
      email:{
        equals:lowerCaseEmail,
      },
    },
  });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
    
  }

  const isPasswordValid = await compareBPasswords(password,user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  res.json(user.id);
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
  comparePasswords,
  updateUser,
  deleteUser,
};

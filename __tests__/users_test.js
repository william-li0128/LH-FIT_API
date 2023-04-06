const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const app = require('../app');

const prisma = new PrismaClient();

describe('POST /users', () => {
  beforeEach(async () => {
    // Clear the database before each test
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    // Disconnect the Prisma client after all tests are finished
    await prisma.$disconnect();
  });

  test('creates a new user with hashed password in the database', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/api/users')
      .send(user)
      .expect(200);

    expect(response.body.name).toBe(user.name);
    expect(response.body.email).toBe(user.email);

    const dbUser = await prisma.user.findUnique({ where: { email: user.email } });
    expect(dbUser).toBeDefined();
    expect(dbUser.name).toBe(user.name);
    expect(dbUser.password).not.toBe(user.password);
  });

});

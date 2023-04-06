const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = require('./api_routes/index')

const prisma = new PrismaClient();
const app = express();
const PORT = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// get routers from index.js
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Disconnect the Prisma client when the server is shut down
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  console.log('Prisma client disconnected');
});

module.exports = app;
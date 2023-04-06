const { PrismaClient } = require('@prisma/client')
const fs = require('fs')

const prisma = new PrismaClient()
const exercisesJsonData = require('../data/exercises.json')
const usersJsonData = require('../data/users.json')

// function to create a seed script
function generateSeedScript(data, modelName) {
  let script = ''

  for (const item of data) {
    script += `await prisma.${modelName}.create({
      data: {
        ${Object.keys(item)
          .map((key) => `${key}: ${JSON.stringify(item[key])}`)
          .join(',\n')}
      },
    })\n`
  }

  return script
}

const uniqueExercisesArr = exercisesJsonData.filter((obj, index, self) =>
  index === self.findIndex((o) => o.name === obj.name)
);

const head = `const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed() {
  // reset database
  await prisma.exercise.deleteMany({})
  await prisma.user.deleteMany({})
  console.log('All previous records deleted.')

`

// seed the exercise database
const exercisesSeedScript = generateSeedScript(uniqueExercisesArr, 'Exercise')

// seed the user database
const usersSeedScript = generateSeedScript(usersJsonData, 'User')

const tail = `  // Disconnect from the database
await prisma.$disconnect()

}

seed()
.catch(e => console.error(e))`

const seedData = head + exercisesSeedScript + usersSeedScript + tail


fs.writeFileSync('prisma/seed.js', seedData)


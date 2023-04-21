const { PrismaClient } = require('@prisma/client');
const axios = require("axios")

const prisma = new PrismaClient();

async function searchYouTube(name) {
  const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: name,
      part: 'snippet',
      maxResults: 1,
      // update your YOUTUBE API KEY here:
      key: 'AIzaSyC_A0Es1uhhnS-HsenGZhlRFdBbEf8emFw'
    }
  });

  const videoId = data.items[0].id.videoId;
  return `https://www.youtube.com/watch?v=${videoId}`;
}

async function updateYouTubeLink() {
  const exercises = await prisma.exercise.findMany({
    where: {
      id: {
        gt: 386
      }
    }
  });

  for (const exercise of exercises) {
    const url = await searchYouTube(exercise.name);
    console.log(url);
    console.log(typeof(url));
    console.log(`Updating datatable ${exercise.id} with URL ${url}`);
    
    // Update the datatable's URL using Prisma's `update` method
    await prisma.exercise.update({
      where: { 
        id: exercise.id,
      },
      data: { 
        youtueblink: url,
      },
    });
  }
}

updateYouTubeLink();
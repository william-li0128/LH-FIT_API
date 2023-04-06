This is a [Prisma](https://www.prisma.io/) to provide an api for the Lighthouse Fit App.

## Set up Prisma and connect PostgreSQL database

- Please make sure you have installed Prisma via "npm i".

- Bootstrap a basic Prisma setup: ```npx prisma init```.

- Go to your psql terminal, create a new database and modify infomations in the ".env" file. The format would be: "mysql://USER:PASSWORD@HOST:PORT/DATABASE"

- Use ```npx prisma db push``` to create tables in your database. You should see the following outpot:
```
Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env 
Prisma schema loaded from prisma/schema.prisma

🚀  Your database is now in sync with your schema. Done in 2.10s
```

- Inserting the seed data via this code:
```
node prisma/seed.js
```

- Update Prisma Client everytime Prisma schema file is changing:
```
npx prisma generate
```

- View and check the database via this method:
```
npx prisma studio
```

## Set up Prisma and connect PostgreSQL database

-  default api port: http://localhost:3000
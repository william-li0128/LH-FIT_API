const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require("./routes/users")
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(8080, () => {
  console.log(`API server listening on port ${PORT}`)
});

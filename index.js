const express= require('express');
const app = express();
const userRouter = require('./routes/userRouter');


app.use('/user', express.json(),userRouter);
require('dotenv').config();
const db = require('./database/database.js');


app.listen(process.env.PORT, () => {
    console.log("server node running!");
});

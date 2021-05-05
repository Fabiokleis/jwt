const express= require('express');
const app = express();
const userRouter = require('./routes/userRouter');

app.use('/user', userRouter);
require('dotenv').config();


app.listen(process.env.PORT, () => {
    console.log("server node running!");
});

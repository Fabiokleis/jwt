const express= require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');



require('dotenv').config();
const db = require('./database/database.js');


app.use('/user', express.json(),userRouter);

app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => {
    console.log("server node running!");
});

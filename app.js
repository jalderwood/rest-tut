const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const port = 3000;
const cors = require('cors');



// MIDDLEWARES3

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});


// connect to db
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("connected to db")
);

//seNewUrlParser: true,
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
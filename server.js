const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlRoute=require('./routes/url');


app.use(express.json());
const PORT=3000;

app.use('/url', urlRoute);

mongoose.connect('mongodb://localhost:27017/shortURL', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
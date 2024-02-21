const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlRoute=require('./routes/url');
const URL=require('./model/url');

app.use(express.json());
const PORT=3000;

app.use('/url', urlRoute);

app.get('/:shortId',async (req, res) => {
    const shortId=req.params.shortId;
    const entry= await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{timestamp:Date.now()},
        }
    })
       res.redirect(entry.longUrl); 
})

mongoose.connect('mongodb://localhost:27017/shortURL', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
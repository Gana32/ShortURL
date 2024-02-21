const express=require('express');

const {handleGneneratenewShortURL}=require('../controller/url');

const {handlegetanalytics}=require('../controller/url');

const router=express.Router();

router.post("/",handleGneneratenewShortURL);

router.get("/analytics/:shortId",handlegetanalytics);

module.exports=router;

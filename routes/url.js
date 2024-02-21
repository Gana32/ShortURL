const express=require('express');

const {handleGneneratenewShortURL}=require('../controller/url');

const router=express.Router();

router.post("/",handleGneneratenewShortURL);

module.exports=router;

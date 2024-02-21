const shortid= require('shortid');
const URL=require('../model/url');

async function handleGneneratenewShortURL(req,res){
    const body=req.body;
    if(!body.url){
        return res.status(400).json({
            error:"url is required"
        });
    }
    const shortId=shortid(8);

    await URL.create({
        shortId:shortId,
        longUrl:body.url,
        visitHistory:[]
    })
   return res.status(200).json({id:shortId});
    }


    module.exports={
        handleGneneratenewShortURL
    }
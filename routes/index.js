const express=require('express')
const router=express.Router();

router.get("/",(req,res)=>{
    console.log("Got a get a request")
    res.send("Got it")
})
router.post("/",(req,res)=>{
    console.log(req.vall)
    res.send(`<h1>${req.body.name}</h1>`)
})


module.exports=router
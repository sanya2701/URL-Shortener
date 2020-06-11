const router = require("express").Router();
const Url = require("../models/link")

router.get("/",(req,res)=>{
    res.render("main");
})

router.post("/",(req,res)=>{
    const long = req.body.longurl;
    const newUrl = Url({
        longurl : long
    });
    newUrl.save((err)=>{
        if(err) console.log(err);
        else{
            Url.find({},(err,urls)=>{
                if(err){
                    console.log(err);
                }else{
                    res.render("main",{urls});
                }
            })
        } 
    })
})

router.get("/:short",(req,res)=>{
    console.log(req.params.shorturl);
    const url = Url.findOne({shorturl:req.params.short})
        console.log(url);
        url.count++;
        url.save();
        res.redirect(url.longurl);
});

module.exports = router;
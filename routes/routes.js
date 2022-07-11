const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "..", "/views/index.html"));
});

router.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "/views/about.html"));
});

router.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "/views/contact.html"));
});

router.get("/post", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "/views/post.html"));
});
module.exports = router;
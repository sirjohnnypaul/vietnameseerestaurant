var express = require('express');
var router = express.Router();
const fs = require("fs");
const mail = require("./mail/mail")


router.get("/", (req,res,next) => {
    res.render("contact",{});
})

router.post("/contactForm", (req,res,next) =>{
    console.log(req.body)

    const output = `
    <p> You have new contact request</p>
    <h3> Contact Details</h3>
    <ul>
    <li>Name: ${req.body.senderName}</li>
    <li>Email: ${req.body.senderEmail}</li>
    </ul>
    <h3> Message </h3>
    <p> ${req.body.message} </p>
    `;
    
    mail.send(output)
    return res.status(200)
})




module.exports = router;
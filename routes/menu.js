var express = require('express');
var router = express.Router();
const fs = require("fs");
 
router.get("/", (req,res,next) => {
    fs.readFile("./data/menu_test.json", (err, menu_test) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Menu Read Success!")
            res.render('menu', {menu_test: menu_test})
        }
    })
    
});


router.post('/saveMenu', (req,res,next) => {
    // var menu = {
    //     table: []
    // }
    
    // menu.table.push({id:1, square: 3});
    // var json = JSON.stringify(menu);
    
    
    // fs.writeFile("./data/menu.json", json, "utf8", (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Menu Updated")
    //     }
    // })
    return res.status(200).json({ message : "saved the menu"})
    console.log("saved the menu");
    
})

module.exports = router;


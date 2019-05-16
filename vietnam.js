const express = require("express");
const app = express();
const menu = require("./routes/menu");
const contact = require("./routes/contact");
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(cookieParser());

app.use('/', express.static("public"))
app.use("/menu", express.static('public'));

app.use("/", (req,res,next) => {
    console.log(req.body , req.method , req.cookies, req.url);
    next();
})

app.use('/menu', menu);
app.use('/contact', contact);

app.get("/", (req,res,next) => {
    res.render('index',{})
})

app.get('/route', (req,res,next) => {
    res.render('route',{})
})

app.get('/about', (req,res,next) => {
    res.render('about',{})
})

app.get('/mainPage', (req,res,next) => {
    res.render('mainPage',{})
})

app.get('/privacy', (req,res,next) => {
    res.sendFile(__dirname  + '/public/pdf/privacy.pdf')
})

//ZMIEN PORT!
app.listen(3000, () => {
    console.log("Server is running on 3000");
})

const express = require('express');
const app = express();
const path = require('path');

// ye do lines ko parser bolte
// inn do lines ki vajah de hum form ka data handle kr payenge
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// setting up public static files(images, css, js vgera)
// har request ke static files idhar dhundhenge
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as a view engine
app.set('view engine', 'ejs');

// pehla route
// home page route
app.get("/", (req, res) => {
    // res.send("he is coming")
    res.render('index')
})
app.get("/profiles/:username", (req, res) => {
    // ab jo bhi username mein aayega, vo access krte hain chalo
    // req.params ka mtlb hai aisa kuchh bhi jiske aage ":" hai
    // req.params.username()
    // res.send("in progress")
    res.send(`welcome, ${req.params.username[0].toUpperCase() + req.params.username.slice(1)}`) // ye username print oh jayega page par
})

// server chalaya
app.listen(3000, () => {
    console.log("Server running on port 3000");
})
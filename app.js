const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!");
    // console.log(req)
});

app.get('/home', (req, res) => {
    res.send("Home page ");
   
});

app.get('/about', (req, res) => {
    res.send("About us page ");
   
});

app.listen(3000, function () {
    console.log("Server is running on port 3000...");
});

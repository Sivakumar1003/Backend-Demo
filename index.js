const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use("/api", (req, res) => {
    res.status(200).json({status: true, url: "api"});
})

app.use("/", (req, res) => {
    res.status(200).json({status: true});
});

app.listen(port, () => console.log(`${port}server runing....`))
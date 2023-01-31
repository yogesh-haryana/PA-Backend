const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, resp)=> {
    resp.send("Success");
})

async function start () {
    try {
        app.listen(port, ()=> {
            console.log("Server Started");
        })
    } catch {
        console.warn("Some Error Occured");
    }
}

start();
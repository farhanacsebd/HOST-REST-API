const express = require("express");
const app = express();


PORT = process.env.PORT || 5000;


app.get("/", (req,res) =>{
    res.send("Hi I am live")
})


const start = async () => {
    try {
        app.listen(PORT,() =>{
            console.log(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()

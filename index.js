require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect")
const products_routers = require("./routes/products")


PORT = process.env.PORT || 5000;


//middleware or to set router
app.use("/api/products",products_routers)


app.get("/", (req,res) =>{
    res.send("Hi I am live")
})


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,() =>{
            console.log(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()

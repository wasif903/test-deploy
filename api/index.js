import express from "express";
import User from "../routes/User.js"


const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use("/api", User)

app.listen(5000, () => {
    console.log("APP Listening To 5000")
})


export default  app;
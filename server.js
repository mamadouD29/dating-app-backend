import mongoose from "mongoose";
import express from "express";
import Card from "./models/dbCards.js"
import Cors from "cors"

// app config 
const app = express()
const port = process.env.PORT || 8001;

const db_uri = "mongodb+srv://versus:Djamel22@cluster0.qg9ug2c.mongodb.net/datingDB?retryWrites=true&w=majority"
// Middleware 
app.use(express.json())
app.use(Cors())

// DB config
mongoose.set('strictQuery', true);
mongoose.connect(db_uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(connected => console.log("connected to db "))
.catch(err => console.log(err))

// Listener
app.listen(port, ()=>console.log(`Listening on localhost: ${port}`))

//  API Endpoints
app.get("/", (req, res)=> res.send("Hello The Web Dev"))

app.post("/dating/cards", (req, res)=>{
    // const dbCard = req.body;

    Card.create({
        name: req.body.name,
        imgUrl: req.body.imgUrl
    }, (err, data)=>{
        if (err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get("/dating/cards", (req, res)=>{
    Card.find((err, data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
})
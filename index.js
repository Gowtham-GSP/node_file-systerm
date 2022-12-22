const express = require("express")
const cors = require("cors")
const app = express();
const fs = require('fs');
const os = require("node:os");

fs.mkdir("./my folder",function(){
    console.log("file created");
    //creating folder
});

fs.writeFile("./msg.txt","hello world",function(err){
    if(err) throw err;
    console.log("success");
    //file creating
});

fs.writeFile("./msg.txt","hollo makkale",(err)=>{
    console.log("error");
})// arrow function

fs.readFile("./",(err,data)=>{
    if(err)  throw err;
    console.log(data);
})


os.cpus();
os.hostname();




app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());

let products = [
    {
        name: "iphone",
        price: "30000"
    },
    {
        name: "iwatch",
        price: "20000"
    }
]

let bikes = [
    {
        name: "yamaha",
        model: "2020",
        price: "130000"
    },
    {
        name: "honde",
        model: "2021",
        price: "110000"
    },
    {
        name: "hero",
        model: "2020",
        price: "1000"
    }
]




app.get("/bikes", (req, res) => {
    res.json(bikes)
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/Dashboard", (req, res) => {
    res.json({ message: "welcome to Dashboard" })
})

app.get("/service", (req, res) => {
    res.json({ message: "service providing" })
})

app.post("/create-product", (req, res) => {
    products.push(req.body)
    res.json({ message:"product added succesfully"})
})

app.listen(3003)
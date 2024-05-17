const express = require("express")
const user = require('./database')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{
    console.log("Server is running.")
});

app.post("/",async(req,res)=>{
    const {email,password} = req.body

    try{
        const check = await user.findOne({email:email})
        if(check){
            res.json("exists")
        }
        else{
            res.json("notexists")
        }

    }catch(e){
        console.log(e);
    }
})

app.post("/signup",async(req,res)=>{
    const {email,password} = req.body


    try{
        const check = await user.findOne({email:email})
        if(check){
            console.log("User already exists.")
            console.log(email)
            console.log(password)
            res.json("exists")
        }
        else{
            console.log("User doesn't exist, creating a new user.")
            await user.insertMany([{email:email, password:password}]);
            res.json("notexists")
        }

    }catch(e){
        console.error("Error in /signup route:", e);
        res.status(500).json("error");    }
})

app.listen(3001, ()=>{
    console.log("Server is listening to port 3001.")
})

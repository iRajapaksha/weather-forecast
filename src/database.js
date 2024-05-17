const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ishara99:ishara999@weather-app.ho0crvf.mongodb.net/")
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch((e)=>{
        console.log(e)
    })

    const newUser = new mongoose.Schema({
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    })

    const user = mongoose.model("user",newUser)

    module.exports = user;


    //username: ishara99, password: ishara999
    // mongodb+srv://ishara99:ishara999@weather-app.ho0crvf.mongodb.net/
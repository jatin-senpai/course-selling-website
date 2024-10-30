const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.ObjectID
const user = new Schema({
    name: String,
    email: { type : String , unique : true},
    password : String
})
const admin = new Schema({
    name: String,
    email: { type : String , unique : true},
    password : String
})
const course = new Schema({
    title : String,
    description : String,
    imageurl : String,
    creatorid : ObjectID,

})
const purchase = new Schema({
    courseid : ObjectID,
    userid : ObjectID,
})
const usermodel = mongoose.model("user",user)
const adminmodel = mongoose.model("admin",admin)

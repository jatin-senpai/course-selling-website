const {Router} = require("express")
const userRouter = Router()
const {usermodel} = require("../db.cjs")
userRouter.post("/signup",function(req,res){
    res.json({
        message : "from user route"
    })
})
userRouter.post("/signin",function(req,res){
    
})
userRouter.get("/purchases",function(req,res){
    
})
module.exports = {
    userRouter : userRouter
}
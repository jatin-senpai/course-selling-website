const {Router} = require("express")
const adminRouter = Router()
const {adminmodel} = require("../db.cjs")
adminRouter.post("/signup",function(req,res){

})
adminRouter.post("/signin",function(req,res){
    
})
adminRouter.post("/course",function(req,res){
    
})
adminRouter.get("/course",function(req,res){
    
})
adminRouter.put("/course",function(req,res){
    
})
module.exports = {
    adminRouter : adminRouter
}

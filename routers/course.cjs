const {Router} = require("express")
const courseRouter = Router()
const {coursemodel} = require("../db.cjs")
courseRouter.post("/purchase",function(req,res){
    res.json({
        "message": "Course purchased successfully",
    })
})
courseRouter.post("/preview",function(req,res){
    
})
module.exports = {
    courseRouter : courseRouter
}
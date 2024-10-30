const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const {adminRouter} = require("./routers/admin.cjs")
const {courseRouter} = require("./routers/course.cjs")
const {userRouter} = require("./routers/user.cjs")

app.use("/user",userRouter)
app.use("/admin",userRouter)
app.use("/course",courseRouter)
async function main(){
    await mongoose.connect("mongodb+srv://yshake1004:Shake%402004@cluster0.t90r1.mongodb.net/Coursera")
}
main()
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

// app.post("/api/v1/admin",adminRouter)
// app.post("/api/v1/course",courseRouter)
// app.post("/api/v1/user",purchaseRouter)

// const {purchaseRouter} = require("./routers/purchase.cjs")
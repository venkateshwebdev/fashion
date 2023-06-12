import mongoose from "mongoose";

const OurPrdoductsSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    images:{
        squarishURL:String
    },
    price:{
        currentPrice:Number
    }
})

export default mongoose?.models?.Our || mongoose.model("Our",OurPrdoductsSchema)
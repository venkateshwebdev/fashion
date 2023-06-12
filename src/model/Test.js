import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name:"String",
    heading:"String",
    image:"String"
})

export default mongoose?.models?.Test || mongoose.model("Test",TestSchema)
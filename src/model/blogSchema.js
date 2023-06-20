// const { Schema } = require("mongoose");
import mongoose, { Schema,model, mongo } from "mongoose"

const blogSchema = new mongoose.Schema({
    address_business_name : {
        type:String,
        required:[true,"must contain Value"]},
    event_id:String,
    headliner_copy:String,
    event_name:String,
    event_hero_url:{
        type:String,
        required:[true,"must contain Value"]},
    summary:String
})

export default mongoose?.models?.Blog || mongoose.model("Blog",blogSchema)
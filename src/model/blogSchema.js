// const { Schema } = require("mongoose");
import mongoose, { Schema,model, mongo } from "mongoose"

const blogSchema = new mongoose.Schema({
    address_business_name : String,
    event_id:String,
    headliner_copy:String,
    event_name:String,
    event_hero_url:String,
    summary:String
})

export default mongoose?.models?.Blog || mongoose.model("Blog",blogSchema)
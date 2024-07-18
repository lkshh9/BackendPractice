import mongoose from "mongoose"

const categoryschema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
},{timestamps: true})

export const Category = mongoose.model("Category", categoryschema)
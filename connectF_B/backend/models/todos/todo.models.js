import mongoose from "mongoose"
import { User } from "./user.models"

const todoschema = new mongoose.schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // array of Sub-Todos
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoschema)


import mongoose from "mongoose"

const orderItemschema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderschema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: {
        type: [orderItemschema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enums: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
},{timestamps: true})

export const Order = mongoose.model("Order", orderschema)

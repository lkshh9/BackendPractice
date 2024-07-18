import mongoose from 'mongoose'

// creates mongoose schema, schema mein jo object hai uske andar data define hota hai
const userschema = new mongoose.Schema(  
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        }, 
        isActive: Boolean
    }, {timestamps: true}
) 

export const User = mongoose.model("User", userschema)  // creates mongoose model

// mongodb database mein User model users ki tarah dikhai dega, model convert ho jata hai plural mein aur sab lowercase mein convert ho jata hai

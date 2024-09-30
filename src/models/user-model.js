import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
     email: {
        type: String,
        required: true,
        unique: true,
     },
     passwork: {
        type: String,
        required: true,
     },
     nickName: {
         type: String,
         required: false,
     },
     role: {
        type: String,
        enum: ["USER", "ADMINISTARDOR"],
        default: "USER",
     },
});

userSchema.pre("save", async function () {
   this.password = await bcrypt.hash(this.password, 10);
 });
 
 userSchema.methods.isValidPassword = async function (password) {
   return await bcrypt.compare(password, this.password);
 };  
 
 const User = model("User", userSchema);
 
 export default User;
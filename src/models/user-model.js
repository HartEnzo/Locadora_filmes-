import { Schema, model } from "mongoose";

const userShema = new Schema({
     email: {
        type: String,
        required: true,
        unique: true 
     },
     passwork: {
        type: String,
        required: true
     },
     nickName: {
         type: String,
         required: false
     },
     role: {
        type: String,
        enum: ["USER", "ADMINISTARDOR"],
        default: "USER",
     },
});

userShema.pre("save", () => {
    console.log(this.password)

    bcrypt.hash()
})

const User = model("User", userShema);

export default User;
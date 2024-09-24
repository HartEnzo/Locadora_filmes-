import { Schema, model} from "mongoose";

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String, 
        required: true,
    },
    re
})
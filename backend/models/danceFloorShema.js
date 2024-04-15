import { Schema, model } from "mongoose";

const character = new Schema({
    name: String,
    src: String
})

export default model('dance_floor', character);
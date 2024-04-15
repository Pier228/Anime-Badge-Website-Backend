import { Schema, model } from "mongoose";

const character = new Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
})

export default model('dance_floor', character);
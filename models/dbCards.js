import {Schema, model} from "mongoose";

const cardSchema = new Schema({
    name: String,
    imgUrl: String
})
const Card = model("Card", cardSchema)
export default Card;

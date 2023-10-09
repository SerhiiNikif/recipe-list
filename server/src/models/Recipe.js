import mongoose from "mongoose";
const {Schema, model} = mongoose;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
}, {timestamps: true});

const Recipe = model("Recipe", recipeSchema);

export default Recipe;

import RecipeModel from "../models/Recipe.js";

class RecipeService {
    async getRecipes() {
        const result = await RecipeModel.find().sort({ createdAt: -1 });
        return result
    }
}

export default new RecipeService();

import RecipeModel from "../models/Recipe.js";

class RecipeService {
    async getRecipes() {
        const result = await RecipeModel.find().sort({ createdAt: -1 });
        return result
    }

    async addRecipe(name, image) {
        await this.checkIfRecipeExists(name);
        const recipe = new RecipeModel({name, image});
        const result = await recipe.save();
        return {id: result._id}
    }

    async checkIfRecipeExists(name) {
        const recipe = await RecipeModel.findOne({ name });
        if (recipe) {
            throw ApiError.BadRequest(`Recipe ${name} already exists`);
        }
    }
}

export default new RecipeService();

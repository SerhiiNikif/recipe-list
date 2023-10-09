import recipeService from '../services/recipe.service.js';

class RecipeController {
    async getRecipes(req, res, next) {
        try {
            const getRecipesService = await recipeService.getRecipes();
            res.status(200).json(getRecipesService);
        } catch (e) {
            next(e);
        }
    }
}

export default new RecipeController();

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

    async addRecipe(req, res, next) {
        try {
            const addRecipeService = await recipeService.addRecipe(
                req.body.name,
                req.body.image
            );
            res.status(201).json(addRecipeService);
        } catch (e) {
            next(e);
        }
    }
}

export default new RecipeController();

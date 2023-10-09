import recipeRouter from './recipe.js';

export default function configureRoutes(app) {
    app.use('/recipes', recipeRouter);
}
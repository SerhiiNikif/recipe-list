import express from "express";

const router = express.Router();

import recipeController from '../controllers/recipe-controller.js';
import { ctrlWrapper } from '../middlewares/index.js';

router.get('/', ctrlWrapper(recipeController.getRecipes));

export default router;
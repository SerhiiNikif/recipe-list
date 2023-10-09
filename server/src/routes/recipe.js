import express from "express";
import {body} from 'express-validator';

const router = express.Router();

import recipeController from '../controllers/recipe-controller.js';
import { validateInputFields, ctrlWrapper } from '../middlewares/index.js';

const categoryValidations = [
    body('name').isLength({ min: 3, max: 100 }).isString(),
    body('image').isURL()
];

router.get('/', ctrlWrapper(recipeController.getRecipes));
router.post('/', validateInputFields(categoryValidations), ctrlWrapper(recipeController.addRecipe));

export default router;
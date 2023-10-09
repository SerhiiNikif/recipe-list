import { reducer as favoritesReducer } from "./favorites/favorites.slice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const reducers = combineReducers({
  favorites: favoritesReducer
}) 

export const store = configureStore({
  reducer: reducers,
  devTools: true
})

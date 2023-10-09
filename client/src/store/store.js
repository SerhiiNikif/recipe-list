import { api } from "./api/api";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const reducers = combineReducers({
  favorites: favoritesReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

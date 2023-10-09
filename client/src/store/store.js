import { createLogger } from "redux-logger";
import { api } from "./api/api";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const logger = createLogger({
  collapsed: true
})

const reducers = combineReducers({
  favorites: favoritesReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).concat(logger)
})

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesDatabaseApi } from "../services/moviesdatabase";

export const store = configureStore({
  reducer: {
    [moviesDatabaseApi.reducerPath]: moviesDatabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesDatabaseApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

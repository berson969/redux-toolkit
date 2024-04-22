import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/MoviesSlice";
import {persistStore} from "redux-persist";

export const store = configureStore({
	reducer: {
		movies: moviesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST"]
			}
		})
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

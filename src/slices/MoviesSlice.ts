import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {MoviesState} from "../models";
import {persistReducer} from "redux-persist";
import persistConfig from "../../persistConfig";

const initialState = {
	movies: { Search: [], totalResults: "0", Response: "false" },
	favorite: [],
	currentPage: 1,
	searchPattern: '',
	loading: false,
	error: "",
} as MoviesState;

export const fetchMovies =
	createAsyncThunk(
		"search/fetchMovies",
		async ({ searchPattern, currentPage }: { searchPattern: string, currentPage: number }, { rejectWithValue }) => {
			try {

				const response = await fetch(
					`${import.meta.env.VITE_BASE_URL}&s=${searchPattern}&page=${currentPage}`
				);

				if (!response.ok) {
					return rejectWithValue("Loading error!");
				}

				return  await response.json();
			} catch (e) {
				if (e instanceof Error) {
					return rejectWithValue(e.message);
				}
				return rejectWithValue("An error occurred");
			}
	});

export const addToFavorite =
	createAsyncThunk(
		"search/addToFavorite",
		async (imdbID: string, { rejectWithValue }) => {
			try {

				const response = await fetch(
					`${import.meta.env.VITE_BASE_URL}&i=${imdbID}`
				);

				if (!response.ok) {
					return rejectWithValue("Loading error!");
				}

				return  await response.json();
			} catch (e) {
				if (e instanceof Error) {
					return rejectWithValue(e.message);
				}
				return rejectWithValue("An error occurred");
			}
		});



export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setCurrentPage:  (state, action) => {
			state.currentPage = action.payload
		},
		setSearchPattern: (state, action) => {
			state.searchPattern = action.payload
			state.movies.Response = "false";
		},
		removeFromFavorite: (state, action) => {
			state.favorite = state.favorite.filter(movie => movie.imdbID !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.movies.Response = "false";
				state.loading = true;
				state.error = "";
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.movies = action.payload;
				state.loading = false;
				state.error = "";
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.movies.Response = "false";
				state.loading = false;
				state.error = action.payload as string;
			})
			.addCase(addToFavorite.pending, (state) => {
				state.loading = true;
				state.error = "";
			})
			.addCase(addToFavorite.fulfilled, (state, action) => {
				state.favorite = state.favorite
					.filter(movie => movie.imdbID !== action.payload.imdbID)
					.concat(action.payload);
				state.loading = false;
				state.error = "";
			})
			.addCase(addToFavorite.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	}
})

export const {
	setCurrentPage,
	setSearchPattern,
	removeFromFavorite,
} = moviesSlice.actions;
export default persistReducer(persistConfig, moviesSlice.reducer);

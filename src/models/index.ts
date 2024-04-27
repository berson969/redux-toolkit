export interface MovieType {
	Title: string;
	Year: string;
	imdbID: string;
	Type: "movie" | "series" | "episode";
	Poster: string;
}

export interface MoviesType {
	Search: MovieType[];
	totalResults: string;
	Response: string;
}

export interface MoviesState {
	movies: MoviesType;
	favorite: FavoriteType[];
	currentPage: number;
	searchPattern: string;
	loading: boolean;
	error: string;
	typePage: 'search' | 'favorite' | '';
}

export interface CardMovieProps {
	movie: MovieType;
}

export interface FavoriteType {
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
	Genre: string;
	Runtime: string;
	Director: string;
	Actors: string;
	imdbRating: string;
}

export interface ActionProps {
	type: string;
	payload: any;
}

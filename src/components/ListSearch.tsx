import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {Col, Container, Row} from "react-bootstrap";
import CardMovie from "./CardMovie.tsx";
import MoviesPaginator from "./MoviesPaginator.tsx";
import {addToFavorite} from "../slices/MoviesSlice.ts";
import "../css/animations.css"


const ListSearch: React.FC = () => {
	const { movies: { Search:  movieList, totalResults, Response },
		searchPattern,
		loading,
		error } = useAppSelector((state) => state.movies);
	const dispatch = useAppDispatch();
	const handleClick = (imdbID: string) => {
		const element = document.getElementById(imdbID);
		if (element) {
			element.classList.add("fly-up-left");
			setTimeout(() => {
				dispatch(addToFavorite(imdbID));
			}, 1000);
		}
	};

	return (
		searchPattern && Boolean(Response) ? (
			movieList.length === 0 ? (
				<Container className="text-center">
					<h2>Ничего не найдено</h2>
				</Container>
			) : (
				<Container className="text-center">
					{loading && (
						<div className="spinner-border text-info" role="status">
							<span className="visually-hidden">Подождите идет загрузка...</span>
						</div>
					)}
					{error && <h4>{error}</h4>}
					<h2 className="text-center m-5">Найдено всего {totalResults} фильмов</h2>
					<MoviesPaginator />
					<Row className="d-flex flex-wrap g-5 justify-content-center">
						{movieList.map(movie => (
							<Col key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
								<CardMovie movie={movie} />
							</Col>
						))}
					</Row>
				</Container>
			)
		) : null
	);
};

export default ListSearch;

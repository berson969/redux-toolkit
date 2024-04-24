import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Col, Container, Row} from "react-bootstrap";
import CardMovie from "../CardMovie.tsx";
import MoviesPaginator from "../MoviesPaginator.tsx";
import {addToFavorite} from "../../slices/MoviesSlice.ts";
import "./index.css"


const ListSearch: React.FC = () => {
	const { movies: { Search:  movieList, totalResults, Response },
		favorite,
		searchPattern,
		loading,
		error } = useAppSelector((state) => state.movies);
	const dispatch = useAppDispatch();

	useEffect(() => {

	}, [favorite]);
	const handleClick = (imdbID: string) => {
		if (favorite.some(item => item.imdbID === imdbID)) return;
		const element = document.getElementById(imdbID);

		if (element) {
			const copyElement = element.cloneNode(true) as HTMLElement;
			element.appendChild(copyElement);

			copyElement.style.setProperty('--animation-end-y', `-${window.innerHeight}px`);
			copyElement.style.setProperty('--animation-end-x', `${window.innerWidth-200}px`);

			copyElement.classList.add("fly-up-left");
			dispatch(addToFavorite(imdbID));
			setTimeout(() => {
				copyElement.remove();
			}, 500);
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
							<Col key={movie.imdbID} onClick={() => handleClick(movie.imdbID)} className="position-relative">
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

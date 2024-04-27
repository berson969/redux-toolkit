import React, {useEffect} from 'react';
import "./index.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Col, Container, Row} from "react-bootstrap";
import CardMovie from "../CardMovie.tsx";
import MoviesPaginator from "../MoviesPaginator.tsx";
import {addToFavorite, setSearchPattern} from "../../slices/MoviesSlice.ts";
import SpinComponent from "../SpinComponent.tsx";
import ErrorComponent from "../ErrorComponent.tsx";



const ListSearch: React.FC = () => {
	const movieList = useAppSelector(state => state.movies.Search);
	const totalResults = useAppSelector(state => state.movies.totalResults);
	const Response = useAppSelector(state => state.movies.Response);
	const favorite = useAppSelector(state => state.favorite);
	// const searchPattern = useAppSelector(state => state.searchPattern);
	const loading = useAppSelector(state => state.loading);
	const error = useAppSelector(state => state.error);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setSearchPattern(""));
	}, []);

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
		<Container className="text-center">
			{loading && <SpinComponent />}
			{error && <ErrorComponent error={error} />}
			{!loading && !error && Response === 'True' &&
				<div>
					<h2 className="text-center m-5">Найдено всего {totalResults} фильмов</h2>
					<MoviesPaginator />
					<Row className="d-flex flex-wrap g-5 justify-content-center">
						{movieList.map(movie => (
							<Col key={movie.imdbID} onClick={() => handleClick(movie.imdbID)} className="position-relative">
								<CardMovie movie={movie} />
							</Col>
						))}
					</Row>
				</div>
			}
		</Container>
	);
};

export default ListSearch;

import React from 'react';
import {Pagination} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchMovies, setCurrentPage} from "../slices/MoviesSlice.ts";

const MoviesPaginator : React.FC = () => {
	const dispatch = useAppDispatch();
	const { currentPage, searchPattern, movies: { totalResults }} = useAppSelector(state => state.movies);

	const totalPages = Math.ceil(Number(totalResults) / 10);
	const startPage = Math.max(1, currentPage - 4);
	const endPage = Math.min(totalPages, startPage + 9);
	const paginatorArray = Array.from({ length: (endPage - startPage + 1) }, (_, index) => startPage + index)

	const controlLastFirst: boolean = totalPages > 10;
	const controlPrevNext: boolean = totalPages > 3;
	const controlAlone: boolean = totalPages > 1;

	const handleClick = (page: number) => {
		dispatch(fetchMovies({ searchPattern, currentPage: page }));
		dispatch(setCurrentPage(page))
	}


	return (
		<Pagination className="container-md d-flex justify-content-center mb-5">
			{controlLastFirst && <Pagination.First onClick={() => handleClick(1)} />}
			{controlPrevNext && <Pagination.Prev onClick={() => handleClick(Math.max(1, currentPage - 1))} />}

			{controlAlone && paginatorArray.map(page => (
				<Pagination.Item key={page} active={page === currentPage} onClick={() => handleClick(page)}>
					{page}
				</Pagination.Item>
			))}
			{controlPrevNext && <Pagination.Next onClick={() => handleClick(Math.min(totalPages, currentPage + 1))} />}
			{controlLastFirst && <Pagination.Last onClick={() => handleClick(totalPages)}/>}
		</Pagination>
	);
};

export default MoviesPaginator;

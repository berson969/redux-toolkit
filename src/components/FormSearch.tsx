import React, {ChangeEvent, FormEventHandler, MouseEventHandler} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchMovies, setCurrentPage, setSearchPattern} from "../slices/MoviesSlice";

const FormSearch: React.FC = () => {
	const dispatch = useAppDispatch();
	const searchPattern = useAppSelector(state => state.searchPattern);
	const currentPage = useAppSelector(state => state.currentPage);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchPattern(e.target.value));
	};

	const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(setCurrentPage(1))
		dispatch(fetchMovies({ searchPattern, currentPage }));
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		// @ts-ignore
		handleClick()
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit} className="container-md p-5 d-flex gap-3">
				<Form.Control
					type="text"
					name="search"
					placeholder="Введите название фильма"
					value={searchPattern}
					onChange={handleChange}
					className="shadow p-2 bg-body-tertiary rounded"
				/>
				<Button
					variant="primary"
					type="button"
					onClick={handleClick}
					className="px-5"
				>
					Поиск
				</Button>
			</Form>
		</Container>
	);
};

export default FormSearch;

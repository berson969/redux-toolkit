import React, {ChangeEvent, MouseEventHandler} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchMovies, setCurrentPage, setSearchPattern} from "../slices/MoviesSlice";

const FormSearch: React.FC = () => {
	const dispatch = useAppDispatch();
	const { searchPattern } = useAppSelector(state => state.movies);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchPattern(e.target.value));
	};

	const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		dispatch(setCurrentPage(1))
		dispatch(fetchMovies({ searchPattern, currentPage: 1 }));
	};

	return (
		<Container>
			<Form className="container-md p-5 d-flex gap-3">
				<Form.Control
					type="text"
					placeholder="Введите название фильма"
					value={searchPattern}
					onChange={handleChange}
					className="shadow p-2 bg-body-tertiary rounded"
				/>
				<Button
					variant="primary"
					type="submit"
					onClick={handleSubmit}
					className="px-5"
				>
					Поиск
				</Button>
			</Form>
		</Container>
	);
};

export default FormSearch;

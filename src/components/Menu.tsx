import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {setTypePage} from "../slices/MoviesSlice.ts";
import {useAppDispatch, useAppSelector} from "../hooks";

const Menu: React.FC = () => {

	const dispatch = useAppDispatch();
	const typePage = useAppSelector(state => state.typePage)

	const handleMenuClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, type: string = "") => {
		e.preventDefault();
		dispatch(setTypePage(type));
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container className="mx-8 d-flex justify-content-between">
				<Nav.Link
					onClick={(e)=>handleMenuClick(e)}
				>
					Поиск фильмов по каталогу IMDb
				</Nav.Link>
				<Nav className="">
					<Nav.Link
						onClick={(e)=>handleMenuClick(e,"search")}
						className={typePage === 'search' ? 'text-primary' : ''}
					>
						Поиск
					</Nav.Link>
					<Nav.Link
						onClick={(e)=>handleMenuClick(e,"favorite")}
						className={typePage === 'favorite' ? 'text-primary' : ''}
					>
						Избранное
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Menu;

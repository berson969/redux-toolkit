import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Menu: React.FC = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container className="mx-8 d-flex justify-content-between">
				<Navbar.Brand href="/">Поиск фильмов по каталогу IMDb</Navbar.Brand>
				<Nav className="">
					<Nav.Link href="/search">Поиск</Nav.Link>
					<Nav.Link href="/favorite">Избранное</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Menu;

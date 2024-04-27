import React from 'react';
import {Card} from "react-bootstrap";
import {CardMovieProps} from "../models";

const  CardMovie: React.FC<CardMovieProps> = ({ movie} ) => {
	const { Title, Year, Poster, imdbID} = movie;

	return (
		<Card id={imdbID} style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				src={Poster === "N/A" ? "http://dummyimage.com/286x440/99cccc.gif&text=Poster+is+not+available" : Poster}
				alt="Poster is loading..."
			/>
			<Card.Body>
				<Card.Title>{Title}</Card.Title>
				<Card.Text>{Year}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CardMovie;

import React from 'react';
import {Card, Badge} from "react-bootstrap";
import {FavoriteType} from "../models";
import ButtonX from "./ButtonX.tsx";

const CardFavorite: React.FC<{ movie: FavoriteType}> = ({movie}) => {
	const {
		imdbID,
		Title,
		Poster,
		Year,
		Genre,
		Runtime,
		Director,
		Actors,
		imdbRating,
	} = movie;
	const genresArray: string[] = Genre !== 'N/A' ?  Genre.split(',').map(genre => genre.trim()) : [];

	return (
		<Card className="border mx-auto position-relative" style={{ width: '36rem'}}>
			<div className="row g-0">
				<div className="col-md-12">
					<Card.Img
						variant="top"
						src={Poster === "N/A" ? "http://dummyimage.com/286x440/99cccc.gif&text=Poster+is+not+available" : Poster}
					/>
					{genresArray.length &&
						<div className="position-absolute top-0 mt-3 d-flex flex-column g-3" style={{left: -15}}>
							{genresArray.map((genre, index) => (
							<h5 key={index} >
								<Badge bg="warning" className="rounded-0">{genre}</Badge>
							</h5>
							))}
						</div>
					}
					<div className="position-absolute top-0 end-0">
						<ButtonX id={imdbID}/>
					</div>
				</div>
				<div className="position-absolute mx-md-4 mb-5 bottom-0 start-0 text-bg-secondary opacity-75">
					<Card.Body>
						<Card.Title>{Title}</Card.Title>

						{Year !== 'N/A' ? <Card.Text>год выпуска {Year}</Card.Text> : null}
						{Runtime !== 'N/A' ? <Card.Text>продолжительность {Runtime}</Card.Text> : null}
						{Director !== 'N/A' ? <Card.Text>Режиссер {Director}</Card.Text> : null}
						{Actors !== 'N/A' ? <Card.Text>Актеры {Actors}</Card.Text> : null}
						{imdbRating !== 'N/A' ? <Card.Text>рейтинг {imdbRating}</Card.Text> : null}
					</Card.Body>
				</div>
			</div>
		</Card>
	);
};

export default CardFavorite;

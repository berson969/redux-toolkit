import React from 'react';
import {Card} from "react-bootstrap";
import {FavoriteType} from "../models";

const ContextCardFavorite: React.FC<{ movie: FavoriteType}> = ({movie}) => {
    const {
        Title,
        Year,
        Runtime,
        Director,
        Actors,
        imdbRating
    } = movie;
    return (
        <Card.Body>
            <Card.Title>{Title}</Card.Title>

            {Year !== 'N/A' ? <Card.Text>год выпуска {Year}</Card.Text> : null}
            {Runtime !== 'N/A' ? <Card.Text>продолжительность {Runtime}</Card.Text> : null}
            {Director !== 'N/A' ? <Card.Text>Режиссер {Director}</Card.Text> : null}
            {Actors !== 'N/A' ? <Card.Text>Актеры {Actors}</Card.Text> : null}
            {imdbRating !== 'N/A' ? <Card.Text>рейтинг {imdbRating}</Card.Text> : null}
        </Card.Body>
    );
};

export default ContextCardFavorite;

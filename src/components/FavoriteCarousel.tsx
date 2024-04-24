import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import CardFavorite from "./CardFavorite.tsx";
import {useAppSelector} from "../hooks";
import Carousel from "react-bootstrap/Carousel";

const FavoriteCarousel: React.FC = () => {
	const { favorite } = useAppSelector(state => state.movies)
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index >= favorite.length) {
			setIndex(favorite.length - 1)
		}
	}, [favorite, index])
	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	console.log(favorite)

	return (
			<Container className="mt-5">
						<Carousel fade activeIndex={index} onSelect={handleSelect}>
							{favorite.map(movie => (
								<Carousel.Item key={movie.imdbID}>
									<CardFavorite movie={movie} />
								</Carousel.Item>
							))}
						</Carousel>
			</Container>


	);
};

export default FavoriteCarousel;

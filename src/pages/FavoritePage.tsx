import React from 'react';
import Menu from "../components/Menu";
import FavoriteCarousel from "../components/FavoriteCarousel";

const FavoritePage: React.FC = () => {
	return (
		<div>
			<Menu />
			<FavoriteCarousel />
		</div>
	);
};

export default FavoritePage;

import React from 'react';
import Menu from "../components/Menu.tsx";
import FormSearch from "../components/FormSearch.tsx";
import ListSearch from "../components/ListSearch.tsx";

const SearchPage: React.FC = () => {
	return (
		<div>
			<Menu />
			<FormSearch />
			<ListSearch />
		</div>
	);
};

export default SearchPage;

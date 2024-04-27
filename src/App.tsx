import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Menu from "./components/Menu.tsx";
import {useAppSelector} from "./hooks";
import FormSearch from "./components/FormSearch.tsx";
import ListSearch from "./components/ListSearch/ListSearch.tsx";
import FavoriteCarousel from "./components/FavoriteCarousel.tsx";


function App()  {
	const typePage = useAppSelector(state => state.typePage);
	return (
		<div>
			<Menu />
			{typePage === "search" &&
				<div>
					<FormSearch />
					<ListSearch />
				</div>
			}
			{typePage === "favorite" &&
				<FavoriteCarousel />
			}
		</div>
	);
}

export default App

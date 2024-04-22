import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import FavoritePage from "./pages/FavoritePage.tsx";

function App() {
	return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Menu />}></Route>
			  <Route path="/search" element={<SearchPage />}></Route>
			  <Route path="/favorite" element={<FavoritePage />}></Route>
		  </Routes>
		  <Outlet />
	  </BrowserRouter>
  )
}
export default App

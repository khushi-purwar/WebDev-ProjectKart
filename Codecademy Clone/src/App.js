import "./App.scss";
import NavBar from "./components/header/NavBar";
import Catalog from "./components/Catalog/Catalog";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Catalog />
		</div>
	);
}

export default App;

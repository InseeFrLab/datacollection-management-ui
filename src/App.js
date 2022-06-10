import {AppProvider} from "ui/appContext";
import "./App.css";
import { Router } from "./ui/router";


function App() {
	
	return (
		<AppProvider>
			<div className="App">
				<Router />
			</div>
		</AppProvider>	
	);
}

export default App;

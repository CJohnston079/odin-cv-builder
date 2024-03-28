// import { useState } from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import PreviewPane from "./components/PreviewPane";

function App() {
	return (
		<main>
			<Editor />
			<PreviewPane />
		</main>
	);
}

export default App;

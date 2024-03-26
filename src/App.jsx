// import { useState } from "react";
import "./App.css";
import Editor from "./components/editor";
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

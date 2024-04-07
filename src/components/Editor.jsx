import { useState } from "react";
import Fieldset from "./Fieldset";
import inputs from "../data/inputs";
import "../styles/editor/Editor.css";

export default function Editor() {
	const [activeFieldset, setActiveFieldset] = useState(0);

	const handleSetActiveFieldset = index => {
		setActiveFieldset(activeFieldset === index ? null : index);
	};

	const handleNext = () => {
		const totalFieldsets = document.querySelector("form").children.length;

		setActiveFieldset(prevActiveFieldset =>
			prevActiveFieldset === totalFieldsets - 1 ? prevActiveFieldset : prevActiveFieldset + 1
		);
	};

	const handlePrevious = () => {
		setActiveFieldset(prevActiveFieldset =>
			prevActiveFieldset === 0 ? prevActiveFieldset : prevActiveFieldset - 1
		);
	};

	return (
		<section id="editor">
			<form>
				<Fieldset
					heading="Personal details"
					iconSrc="./src/assets/icons/profile.svg"
					fields={inputs.contact}
					isActive={activeFieldset === 0}
					onShow={() => handleSetActiveFieldset(0)}
				/>
				<Fieldset
					heading="Professional summary"
					iconSrc="./src/assets/icons/summary.svg"
					fields={inputs.summary}
					isActive={activeFieldset === 1}
					onShow={() => handleSetActiveFieldset(1)}
				/>
				<Fieldset
					heading="Employment history"
					iconSrc="./src/assets/icons/employment.svg"
					fields={inputs.employment}
					isActive={activeFieldset === 2}
					onShow={() => handleSetActiveFieldset(2)}
				/>
				<Fieldset
					heading="Education"
					iconSrc="./src/assets/icons/education.svg"
					fields={inputs.education}
					isActive={activeFieldset === 3}
					onShow={() => handleSetActiveFieldset(3)}
				/>
				<Fieldset
					heading="Skills"
					iconSrc="./src/assets/icons/skills.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 4}
					onShow={() => handleSetActiveFieldset(4)}
				/>
				<Fieldset
					heading="Other interests"
					iconSrc="./src/assets/icons/interests.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 5}
					onShow={() => handleSetActiveFieldset(5)}
				/>
				<Fieldset
					heading="References"
					iconSrc="./src/assets/icons/references.svg"
					fields={inputs.sample}
					isActive={activeFieldset === 6}
					onShow={() => handleSetActiveFieldset(6)}
				/>
			</form>
			<div>
				<button onClick={handlePrevious}>Previous</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</section>
	);
}

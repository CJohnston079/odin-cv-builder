import { useState } from "react";
import Fieldset from "./Fieldset";
import form from "../data/form";
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
					header={form.contact.header}
					fields={form.contact.inputs}
					isActive={activeFieldset === 0}
					onShow={() => handleSetActiveFieldset(0)}
				/>
				<Fieldset
					header={form.summary.header}
					fields={form.summary.inputs}
					isActive={activeFieldset === 1}
					onShow={() => handleSetActiveFieldset(1)}
				/>
				<Fieldset
					header={form.employment.header}
					fields={form.employment.inputs}
					isActive={activeFieldset === 2}
					onShow={() => handleSetActiveFieldset(2)}
				/>
				<Fieldset
					header={form.education.header}
					fields={form.education.inputs}
					isActive={activeFieldset === 3}
					onShow={() => handleSetActiveFieldset(3)}
				/>
				<Fieldset
					header={form.skills.header}
					fields={form.skills.inputs}
					isActive={activeFieldset === 4}
					onShow={() => handleSetActiveFieldset(4)}
				/>
				<Fieldset
					header={form.interests.header}
					fields={form.interests.inputs}
					isActive={activeFieldset === 5}
					onShow={() => handleSetActiveFieldset(5)}
				/>
				<Fieldset
					header={form.references.header}
					fields={form.references.inputs}
					isActive={activeFieldset === 6}
					onShow={() => handleSetActiveFieldset(6)}
				/>
			</form>
			<div id="nav-buttons">
				<button id="previous-section" onClick={handlePrevious}>
					Previous
					<span className="button-subheading">Previous section</span>
				</button>
				<button id="next-section" onClick={handleNext}>
					Next
					<span className="button-subheading">Next section</span>
				</button>
			</div>
		</section>
	);
}

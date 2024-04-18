import { useState } from "react";
import FormSection from "./FormSection";
import form from "../data/form";
import "../styles/editor/Editor.css";

export default function Editor() {
	const [activeSection, setActiveSection] = useState(0);

	const handleSetActiveSection = index => {
		setActiveSection(activeSection === index ? null : index);
	};

	const handleNext = () => {
		const totalFieldsets = document.querySelector("form").children.length;

		setActiveSection(prevActiveFieldset =>
			prevActiveFieldset === totalFieldsets - 1 ? prevActiveFieldset : prevActiveFieldset + 1
		);
	};

	const handlePrevious = () => {
		setActiveSection(prevActiveFieldset =>
			prevActiveFieldset === 0 ? prevActiveFieldset : prevActiveFieldset - 1
		);
	};

	return (
		<section id="editor">
			<form>
				<FormSection
					data={form.contact}
					isActive={activeSection === 0}
					onShow={() => handleSetActiveSection(0)}
				/>
				<FormSection
					data={form.summary}
					isActive={activeSection === 1}
					onShow={() => handleSetActiveSection(1)}
				/>
				<FormSection
					data={form.employment}
					isActive={activeSection === 2}
					onShow={() => handleSetActiveSection(2)}
				/>
				<FormSection
					data={form.education}
					isActive={activeSection === 3}
					onShow={() => handleSetActiveSection(3)}
				/>
				<FormSection
					data={form.skills}
					isActive={activeSection === 4}
					onShow={() => handleSetActiveSection(4)}
				/>
				<FormSection
					data={form.interests}
					isActive={activeSection === 5}
					onShow={() => handleSetActiveSection(5)}
				/>
				<FormSection
					data={form.references}
					isActive={activeSection === 6}
					onShow={() => handleSetActiveSection(6)}
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

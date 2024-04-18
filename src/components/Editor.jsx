import { useState } from "react";
import FormSection from "./FormSection";
import form from "../data/form";
import "../styles/editor/Editor.css";

export default function Editor() {
	const [activeSection, setActiveSection] = useState(0);
	const sections = Object.keys(form);

	const handleSetActiveSection = index => {
		setActiveSection(activeSection === index ? null : index);
	};

	const handleNext = () => {
		const totalSections = sections.length;

		setActiveSection(prevActiveSection =>
			prevActiveSection === totalSections - 1 ? prevActiveSection : prevActiveSection + 1
		);
	};

	const handlePrevious = () => {
		setActiveSection(prevActiveSection =>
			prevActiveSection === 0 ? prevActiveSection : prevActiveSection - 1
		);
	};

	return (
		<section id="editor">
			<form>
				{sections.map((section, index) => (
					<FormSection
						key={index}
						data={form[section]}
						isActive={activeSection === index}
						onShow={() => handleSetActiveSection(index)}
					/>
				))}
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

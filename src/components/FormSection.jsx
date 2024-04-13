import { useState } from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import Field from "./Field";
import TextArea from "./TextArea";
import ToggleFields from "./ToggleFields";
import AddFields from "./AddFields";
import "../styles/editor/FormSection.css";

export default function FormSection({ header, fields, isActive, onShow }) {
	const [bonusFieldsShown, setBonusFieldsShown] = useState(false);

	const toggleBonusFields = () => {
		setBonusFieldsShown(!bonusFieldsShown);
	};

	const addFields = () => {
		alert("time to add new fields");

		const parentElement = document.querySelector("add-fields").parentNode;
		const newDiv = document.createElement("div");
		newDiv.className = "section-fields";
		newDiv.textContent = "test";
		parentElement.appendChild(newDiv);
	};

	const createField = field => {
		const Component = field.inputType === "text-area" ? TextArea : Field;

		return (
			<Component
				key={field.name}
				inputType={field.inputType}
				inputName={field.name}
				description={field.description}
			/>
		);
	};

	const defaultFields = fields.filter(field => !field.optional);
	const bonusFields = fields.filter(field => field.optional);
	const fieldElements = defaultFields.map(createField);
	const bonusFieldElements = bonusFields.map(createField);

	const accordionCondition = condition => `${condition ? "accordion-active" : "accordion-hidden"}`;

	return (
		<fieldset id={header.heading.toLowerCase().replaceAll(" ", "-")}>
			<SectionHeader header={header} isActive={isActive} onShow={onShow} />

			<div className={`accordion ${accordionCondition(isActive)}`}>
				<div className="section-fields">{fieldElements}</div>
				<div className={`section-fields ${accordionCondition(bonusFieldsShown)}`}>
					{bonusFieldElements}
				</div>
				{bonusFields.length > 0 && (
					<ToggleFields toggleFieldsFunc={toggleBonusFields} bonusFieldsShown={bonusFieldsShown} />
				)}
				{header.heading !== "Personal details" && header.heading !== "Professional summary" && (
					<AddFields addFieldsFunc={addFields} />
				)}
			</div>
		</fieldset>
	);
}

FormSection.propTypes = {
	header: PropTypes.object.isRequired,
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

import { useState } from "react";
import PropTypes from "prop-types";

import AddFields from "./AddFields";
import Field from "./Field";
import TextArea from "./TextArea";
import ToggleFields from "./ToggleFields";

export default function SectionBody({ inputData, isActive }) {
	const [bonusFieldsShown, setBonusFieldsShown] = useState(false);
	const [children, setChildren] = useState([]);

	const fields = inputData.inputs;

	const addFields = () => {
		setChildren(prevChildren => [
			...prevChildren,
			<div
				key={prevChildren.length}
				className={`section-fields ${hasSubsections ? "subsection" : ""}`}
			>
				{fieldElements}
			</div>,
		]);
	};

	const toggleBonusFields = () => {
		setBonusFieldsShown(!bonusFieldsShown);
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
	const hasSubsections = Object.hasOwn(inputData, "hasSubsections");

	const accordionCondition = condition => `${condition ? "accordion-active" : "accordion-hidden"}`;

	return (
		<div className={`accordion ${accordionCondition(isActive)}`}>
			<div className={`section-fields ${hasSubsections ? "subsection" : ""}`}>{fieldElements}</div>
			{children}
			<div className={`section-fields ${accordionCondition(bonusFieldsShown)}`}>
				{bonusFieldElements}
			</div>
			{bonusFields.length > 0 && (
				<ToggleFields toggleFieldsFunc={toggleBonusFields} bonusFieldsShown={bonusFieldsShown} />
			)}
			{hasSubsections && <AddFields addFieldsFunc={addFields} />}
		</div>
	);
}

SectionBody.propTypes = {
	inputData: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
};

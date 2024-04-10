import { useState } from "react";
import PropTypes from "prop-types";
import FieldsetHeader from "./FieldsetHeader";
import Field from "./Field";
import ToggleFields from "./ToggleFields";
import "../styles/editor/Fieldset.css";

export default function Fieldset({ header, fields, isActive, onShow }) {
	const [bonusFieldsShown, setBonusFieldsShown] = useState(false);

	const toggleBonusFields = () => {
		setBonusFieldsShown(!bonusFieldsShown);
	};

	const requiredFields = [];
	const optionalFields = [];

	for (const field of fields) {
		if (field.optional) {
			optionalFields.push(field);
		} else {
			requiredFields.push(field);
		}
	}

	const fieldElements = requiredFields.map(field => {
		const newField = (
			<Field
				key={field.name}
				inputType={field.inputType}
				inputName={field.name}
				description={field.description}
			/>
		);

		return newField;
	});

	const bonusFieldElements = optionalFields.map(field => {
		const newField = (
			<Field
				key={field.name}
				inputType={field.inputType}
				inputName={field.name}
				description={field.description}
			/>
		);

		return newField;
	});

	return (
		<fieldset id={header.heading.toLowerCase().replaceAll(" ", "-")}>
			<FieldsetHeader header={header} isActive={isActive} onShow={onShow} />
			<div className={`accordion ${isActive ? "accordion-active" : "accordion-hidden"}`}>
				<div className="section-fields">{fieldElements}</div>
				<div
					className={`section-fields ${bonusFieldsShown ? "accordion-active" : "accordion-hidden"}`}
				>
					{bonusFieldElements}
				</div>
				<ToggleFields toggleFieldsFunc={toggleBonusFields} bonusFieldsShown={bonusFieldsShown} />
			</div>
		</fieldset>
	);
}

Fieldset.propTypes = {
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

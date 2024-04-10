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

	const createField = function (field) {
		return (
			<Field
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

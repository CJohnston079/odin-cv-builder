import { useState } from "react";
import PropTypes from "prop-types";
import Field from "./Field";
import FieldsetHeader from "./FieldsetHeader";
import "../styles/editor/Fieldset.css";

export default function Fieldset({ header, fields, isActive, onShow }) {
	const [bonusFieldsShown, setBonusFieldsShown] = useState(false);

	const toggleBonusFields = () => {
		setBonusFieldsShown(!bonusFieldsShown);
	};

	const fieldElements = fields
		.filter(field => field.isShown)
		.map(field => {
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

	const bonusFieldElements = fields
		.filter(field => !field.isShown)
		.map(field => {
			const newField = (
				<Field
					key={field.name}
					inputType={field.inputType}
					inputName={field.name}
					description={field.description}
					// isShown={field.isShown || bonusFieldsShown}
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
				<ToggleBonusFields
					toggleBonusFields={toggleBonusFields}
					bonusFieldsShown={bonusFieldsShown}
				/>
			</div>
		</fieldset>
	);
}

const ToggleBonusFields = function ({ toggleBonusFields, bonusFieldsShown }) {
	const handleClick = () => {
		toggleBonusFields();
	};

	return (
		<button className="toggle-bonus-fields" type="button" onClick={handleClick}>
			{bonusFieldsShown ? "Hide additional fields -" : "Show additional fields +"}
		</button>
	);
};

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

ToggleBonusFields.propTypes = {
	toggleBonusFields: PropTypes.func.isRequired,
	bonusFieldsShown: PropTypes.bool.isRequired,
};

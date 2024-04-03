import PropTypes from "prop-types";
import Field from "./Field";
import FieldsetHeader from "./FieldsetHeader";
import "../styles/editor/Fieldset.css";

export default function Fieldset({ heading, iconSrc, fields, isActive, onShow }) {
	const fieldElements = fields.map(field => {
		const newField = (
			<Field
				key={field.name}
				inputType={field.inputType}
				inputName={field.name}
				description={field.description}
				isShown={field.isShown}
			/>
		);

		return newField;
	});

	return (
		<fieldset id={heading.toLowerCase().replaceAll(" ", "-")}>
			<FieldsetHeader headerText={heading} iconSrc={iconSrc} isActive={isActive} onShow={onShow} />
			{isActive && <div className="section-fields">{fieldElements}</div>}
		</fieldset>
	);
}

Fieldset.propTypes = {
	heading: PropTypes.string.isRequired,
	iconSrc: PropTypes.string.isRequired,
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

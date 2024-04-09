import PropTypes from "prop-types";
import Field from "./Field";
import FieldsetHeader from "./FieldsetHeader";
import "../styles/editor/Fieldset.css";

export default function Fieldset({ header, fields, isActive, onShow }) {
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
		<fieldset id={header.heading.toLowerCase().replaceAll(" ", "-")}>
			<FieldsetHeader header={header} isActive={isActive} onShow={onShow} />
			<div
				className={isActive ? "section-fields accordion-active" : "section-fields accordion-hidden"}
			>
				{fieldElements}
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

import PropTypes from "prop-types";
import Field from "./Field";
import FieldsetHeader from "./FieldsetHeader";
import "../styles/editor/Fieldset.css";

export default function Fieldset({ heading, fields, isActive, onShow }) {
	const fieldElements = fields.map(field => {
		return <Field key={field.name} inputLabel={field.label} inputName={field.name} />;
	});

	return (
		<fieldset>
			<FieldsetHeader headerText={heading} isActive={isActive} onShow={onShow} />
			{isActive ? fieldElements : undefined}
		</fieldset>
	);
}

Fieldset.propTypes = {
	heading: PropTypes.string.isRequired,
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

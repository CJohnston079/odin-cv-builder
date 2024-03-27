import Field from "./Field";
import PropTypes from "prop-types";

export default function Fieldset({ heading, fields }) {
	const fieldElements = fields.map(field => {
		return <Field key={field.name} inputLabel={field.label} inputName={field.name} />;
	});

	return (
		<fieldset>
			<h2>{heading}</h2>
			{fieldElements}
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
};

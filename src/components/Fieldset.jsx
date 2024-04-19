import PropTypes from "prop-types";
import Field from "./Field";
import TextArea from "./TextArea";

import "../styles/editor/SectionBody.css";

export default function Fieldset({ fields, isSubsection }) {
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

	const fieldElements = fields.map(createField);

	return (
		<fieldset className={`fieldset ${isSubsection && "subsection"}`}>{fieldElements}</fieldset>
	);
}

Fieldset.propTypes = {
	fields: PropTypes.array.isRequired,
	isSubsection: PropTypes.bool,
};

Fieldset.defaultProps = {
	isSubsection: false,
};

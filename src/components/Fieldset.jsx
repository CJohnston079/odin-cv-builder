import PropTypes from "prop-types";
import Field from "./Field";
import TextArea from "./TextArea";

import "../styles/editor/SectionBody.css";

export default function Fieldset({ fields }) {
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

	return <fieldset className={`fieldset`}>{fieldElements}</fieldset>;
}

Fieldset.propTypes = {
	fields: PropTypes.array.isRequired,
};

import PropTypes from "prop-types";
import "../styles/editor/Field.css";

export default function Field({ inputType, inputName, description }) {
	let inputElement;

	if (inputType === "text-area") {
		inputElement = <textarea name={inputName} />;
	} else {
		inputElement = <input type={inputType} name={inputName} />;
	}

	return (
		<label>
			{description}
			{inputElement}
		</label>
	);
}

Field.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

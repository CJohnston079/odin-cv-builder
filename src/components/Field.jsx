import PropTypes from "prop-types";
import "../styles/editor/Field.css";

export default function Field({ inputType, inputName, description }) {
	return (
		<label>
			{description}
			<input type={inputType} name={inputName} />
		</label>
	);
}

Field.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

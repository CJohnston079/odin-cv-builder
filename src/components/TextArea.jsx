import PropTypes from "prop-types";
import "../styles/editor/Field.css";

export default function TextArea({ inputName, description }) {
	return (
		<label>
			{description}
			<textarea name={inputName} />
		</label>
	);
}

TextArea.propTypes = {
	inputName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

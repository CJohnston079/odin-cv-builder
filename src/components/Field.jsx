import PropTypes from "prop-types";
import "../styles/editor/Field.css";

export default function Field({ inputLabel, inputName, inputType }) {
	return (
		<label>
			{inputLabel}
			<input name={inputName} type={inputType} />
		</label>
	);
}

Field.propTypes = {
	inputLabel: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
};

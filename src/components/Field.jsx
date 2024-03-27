import PropTypes from "prop-types";

export default function Field({ inputLabel, inputName }) {
	return (
		<label>
			{inputLabel}
			<input name={inputName} />
		</label>
	);
}

Field.propTypes = {
	inputLabel: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
};

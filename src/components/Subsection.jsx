import PropTypes from "prop-types";
import Fieldset from "./Fieldset";

export default function Subsection({ fields }) {
	return (
		<div className="subsection">
			<Fieldset fields={fields} />
		</div>
	);
}

Subsection.propTypes = {
	fields: PropTypes.array.isRequired,
};

import PropTypes from "prop-types";
import Fieldset from "./Fieldset";
import SubsectionHeader from "./SubsectionHeader";

export default function Subsection({ fields }) {
	return (
		<div className="subsection">
			<SubsectionHeader />
			<Fieldset fields={fields} />
		</div>
	);
}

Subsection.propTypes = {
	fields: PropTypes.array.isRequired,
};

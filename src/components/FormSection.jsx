import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import Fieldset from "./Fieldset";
import "../styles/editor/FormSection.css";

export default function FormSection({ header, fields, isActive, onShow }) {
	return (
		<div id={header.heading.toLowerCase().replaceAll(" ", "-")} className="form-section">
			<SectionHeader header={header} isActive={isActive} onShow={onShow} />
			<Fieldset fields={fields} isActive={isActive} />
		</div>
	);
}

FormSection.propTypes = {
	header: PropTypes.object.isRequired,
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

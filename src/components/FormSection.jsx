import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import Fieldset from "./Fieldset";
import "../styles/editor/FormSection.css";

export default function FormSection({ data, isActive, onShow }) {
	const header = data.header;
	const fields = data.inputs;
	const id = header.heading.toLowerCase().replaceAll(" ", "-");

	return (
		<div id={id} className="form-section">
			<SectionHeader header={header} isActive={isActive} onShow={onShow} />
			<Fieldset fieldsetId={id} fields={fields} isActive={isActive} />
		</div>
	);
}

FormSection.propTypes = {
	data: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

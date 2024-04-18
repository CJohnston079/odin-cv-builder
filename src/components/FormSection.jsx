import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import "../styles/editor/FormSection.css";

export default function FormSection({ data, isActive, onShow }) {
	const { header, ...inputData } = data;
	const id = header.heading.toLowerCase().replaceAll(" ", "-");

	return (
		<div id={id} className="form-section">
			<SectionHeader header={header} isActive={isActive} onShow={onShow} />
			<SectionBody inputData={inputData} isActive={isActive} />
		</div>
	);
}

FormSection.propTypes = {
	data: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

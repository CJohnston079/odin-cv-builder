import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import FieldsetContainer from "./FieldsetContainer";
import SubsectionContainer from "./SubsectionContainer";
import "../styles/editor/FormSection.css";

export default function FormSection({ data, isActive, onShow }) {
	const { header, ...inputData } = data;
	const id = header.heading.toLowerCase().replaceAll(" ", "-");
	const hasSubsections = Object.hasOwn(data, "hasSubsections");

	const SectionBody = hasSubsections ? (
		<SubsectionContainer inputData={inputData} isActive={isActive} />
	) : (
		<FieldsetContainer inputData={inputData} isActive={isActive} />
	);

	return (
		<div id={id} className="form-section">
			<SectionHeader header={header} isActive={isActive} onShow={onShow} />
			{SectionBody}
		</div>
	);
}

FormSection.propTypes = {
	data: PropTypes.object.isRequired,
	isActive: PropTypes.bool.isRequired,
	onShow: PropTypes.func.isRequired,
};

import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/editor/Field.css";

export default function TextArea({ inputName, description }) {
	const [charCount, setCharCount] = useState(0);
	const [wordCount, setWordCount] = useState(0);

	const handleInputChange = event => {
		setCharCount(event.target.value.length);
		setWordCount(event.target.value.match(/\S+/g)?.length || 0);
	};

	return (
		<label>
			{description}
			<textarea onChange={handleInputChange} name={inputName} />
			<span className="word-count">{`${charCount} characters, ${wordCount} words`}</span>
		</label>
	);
}

TextArea.propTypes = {
	inputName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

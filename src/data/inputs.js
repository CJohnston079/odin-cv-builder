export default {
	contact: [
		{ inputType: "text", name: "forename", description: "First name", isShown: true },
		{ inputType: "text", name: "surname", description: "Surname", isShown: true },
		{ inputType: "text", name: "job-title", description: "Job title", isShown: true },
		{ inputType: "text", name: "website", description: "Location", isShown: true },
		{ inputType: "email", name: "email", description: "Email address", isShown: true },
		{ inputType: "tel", name: "phone-number", description: "Phone number", isShown: true },
	],
	summary: [
		{
			inputType: "text-area",
			name: "summary",
			description:
				"Outline your professional background in 2–5 sentences. Make sure to tailor your summary to the specific job you're applying for and highlight your key skills and experiences that align with the position's requirements.",
			isShown: true,
		},
	],
	sample: [{ inputType: "text", name: "sample", description: "Sammple field", isShown: true }],
};

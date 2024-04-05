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
	employment: [
		{ inputType: "text", name: "job-title", description: "Job title" },
		{ inputType: "text", name: "employer", description: "Employer" },
		{ inputType: "date", name: "start-date", description: "Start date" },
		{ inputType: "date", name: "end-date", description: "End date" },
		{
			inputType: "text-area",
			name: "job-description",
			description:
				"Role description. Outline your responsibilities and accomplishmets you had in this role. Mention any specific skills you used in the role, particularly if they are relevant to the role you are applying for.",
		},
	],
	education: [
		{ inputType: "text", name: "course-name", description: "Course name" },
		{ inputType: "text", name: "institution", description: "Institution" },
		{ inputType: "date", name: "start-date", description: "Course start date" },
		{ inputType: "date", name: "end-date", description: "Course end date" },
	],
	sample: [{ inputType: "text", name: "sample", description: "Sammple field", isShown: true }],
};

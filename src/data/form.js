export default {
	contact: {
		header: { heading: "Personal details", iconSrc: "./src/assets/icons/profile.svg" },
		inputs: [
			{ inputType: "text", name: "forename", description: "First name", isShown: true },
			{ inputType: "text", name: "surname", description: "Surname", isShown: true },
			{ inputType: "text", name: "job-title", description: "Job title", isShown: true },
			{ inputType: "text", name: "website", description: "Location", isShown: true },
			{ inputType: "email", name: "email", description: "Email address", isShown: true },
			{ inputType: "tel", name: "phone-number", description: "Phone number", isShown: true },
			{ inputType: "text", name: "website", description: "Website", isShown: false },
			{ inputType: "text", name: "address", description: "Address", isShown: false },
			{ inputType: "text", name: "linkedin", description: "LinkedIn", isShown: false },
			{ inputType: "text", name: "github", description: "GitHub", isShown: false },
		],
	},
	summary: {
		header: { heading: "Professional summary", iconSrc: "./src/assets/icons/summary.svg" },
		inputs: [
			{
				inputType: "text-area",
				name: "summary",
				description:
					"Outline your professional background in 2–5 sentences. Make sure to tailor your summary to the specific job you're applying for and highlight your key skills and experiences that align with the position's requirements.",
				isShown: true,
			},
		],
	},
	employment: {
		header: { heading: "Employment history", iconSrc: "./src/assets/icons/employment.svg" },
		inputs: [
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
	},
	education: {
		header: { heading: "Education", iconSrc: "./src/assets/icons/education.svg" },
		inputs: [
			{ inputType: "text", name: "course-name", description: "Course name" },
			{ inputType: "text", name: "institution", description: "Institution" },
			{ inputType: "date", name: "start-date", description: "Course start date" },
			{ inputType: "date", name: "end-date", description: "Course end date" },
		],
	},
	skills: {
		header: { heading: "Skills", iconSrc: "./src/assets/icons/skills.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field", isShown: true }],
	},
	interests: {
		header: { heading: "Other interests", iconSrc: "./src/assets/icons/interests.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field", isShown: true }],
	},
	references: {
		header: { heading: "References", iconSrc: "./src/assets/icons/references.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field", isShown: true }],
	},
};

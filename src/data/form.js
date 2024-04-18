export default {
	contact: {
		header: { heading: "Personal details", iconSrc: "./src/assets/icons/profile.svg" },
		inputs: [
			{ inputType: "text", name: "forename", description: "First name" },
			{ inputType: "text", name: "surname", description: "Surname" },
			{ inputType: "text", name: "job-title", description: "Job title" },
			{ inputType: "text", name: "location", description: "Location" },
			{ inputType: "email", name: "email", description: "Email address" },
			{ inputType: "tel", name: "phone-number", description: "Phone number" },
			{ inputType: "text", name: "website", description: "Website", optional: true },
			{ inputType: "text", name: "linkedin", description: "LinkedIn", optional: true },
			{ inputType: "text", name: "github", description: "GitHub", optional: true },
			{ inputType: "text", name: "dribbble", description: "Dribbble", optional: true },
		],
		hasOptionalFields: true,
	},
	summary: {
		header: { heading: "Professional summary", iconSrc: "./src/assets/icons/summary.svg" },
		inputs: [
			{
				inputType: "text-area",
				name: "summary",
				description:
					"Outline your professional background in 2–5 sentences. Make sure to tailor your summary to the specific job you're applying for and highlight your key skills and experiences that align with the position's requirements.",
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
		hasSubsections: true,
	},
	education: {
		header: { heading: "Education", iconSrc: "./src/assets/icons/education.svg" },
		inputs: [
			{ inputType: "text", name: "course-name", description: "Course name" },
			{ inputType: "text", name: "institution", description: "Institution" },
			{ inputType: "date", name: "start-date", description: "Course start date" },
			{ inputType: "date", name: "end-date", description: "Course end date" },
		],
		hasSubsections: true,
	},
	skills: {
		header: { heading: "Skills", iconSrc: "./src/assets/icons/skills.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field" }],
	},
	interests: {
		header: { heading: "Other interests", iconSrc: "./src/assets/icons/interests.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field" }],
	},
	references: {
		header: { heading: "References", iconSrc: "./src/assets/icons/references.svg" },
		inputs: [{ inputType: "text", name: "sample", description: "Sammple field" }],
	},
};

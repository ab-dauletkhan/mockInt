export const TIMEZONE = 'UTC+5'
export const TIMEZONE_LABEL = 'Astana Timezone'

export const START_HOUR = 6
export const END_HOUR = 23

export const COMMANDS = {
	START: '/start',
	HELP: '/help',
	SET_HOURS: '/setHoursForTomorrow',
	CHOOSE_SLOT: '/chooseFromSlots',
	MY_INTERVIEW: '/myInterview',
}

export const MESSAGES = {
	START: (username: string) =>
		`Hello, ${username}! 👋
I’m here to help you find a partner for a mock interview. Let’s get started!
You may choose one of the slots using the command: \`/openSlots\` or use \`/setHoursForTomorrow\` to tell me when you're free.`,

	HELP: `
Here's how you can use this bot:

1. ${COMMANDS.SET_HOURS} — tell me when you're available tomorrow
2. ${COMMANDS.CHOOSE_SLOT} — choose a mock interview slot from open times
3. ${COMMANDS.MY_INTERVIEW} — view your confirmed interview

Available in ${TIMEZONE} (${TIMEZONE_LABEL}) ⏰
`,

	SUBMIT_SUCCESS: (date: string) =>
		`Great! 🎉 Your availability for ${date} is saved.\nWe’ll notify you if a match is found.`,

	CANCELLED: `No worries! You can always come back later. 😊`,

	NO_INTERVIEWS:
		`You don’t have any interviews yet. Try /chooseFromSlots or /setHoursForTomorrow.`,
	NO_PLAIN_MESSAGE:
		`For now, I did not add AI to answer to plain messages, but for the future might consider. Just send me your motivation for it @ab_dauletkhan`,
}

export const convertDateTimeZone = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	}

	return new Date(date).toLocaleDateString('ru', options)
}

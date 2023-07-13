export const convertDateToTimeAgo = (date: Date) => {
	const seconds = Math.floor((Number(new Date()) - Number(date)) / 1000)

	let interval = Math.floor(seconds / 31536000)
	if (interval > 1) {
		return `${interval} г. назад`
	}

	interval = Math.floor(seconds / 2592000)
	if (interval >= 1) {
		return `${interval} мес. назад`
	}

	interval = Math.floor(seconds / 86400)
	if (interval > 1) {
		return `${interval} дн. назад`
	}

	interval = Math.floor(seconds / 3600)
	if (interval > 1) {
		return `${interval} ч. назад`
	}

	interval = Math.floor(seconds / 60)
	if (interval > 1) {
		return `${interval} мин. назад`
	}

	if (seconds < 10) return 'меньше минуты'

	return `${Math.floor(seconds)} сек. назад`
}

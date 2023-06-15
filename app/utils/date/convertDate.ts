export const convertDate = (date: string) => {
	return new Date(date).toLocaleDateString('ru')
}

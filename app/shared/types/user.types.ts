export interface IUserItem {
	id: number
	name: string
	surname: string
	role: string
	password: string
	telephone: string
	created_at: string
}

export interface IUser {
	quantity_users: number
	users: IUserItem[]
}

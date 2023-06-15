import { IUserItem } from '@/shared/types/user.types'

export interface IUserState {
	role: string
	id: number
	exp: number
}
export interface ITokens {
	access_token: string
	type_token: string
}
export interface IInitialState {
	user: IUserState | null
	status: boolean
}

export interface IEmailPassword {
	telephone: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUserItem & {
		role: string
		exp: number
	}
}

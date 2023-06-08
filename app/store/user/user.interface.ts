import { IUser } from '@/shared/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export enum Status {
	PENDING = 'pending',
	SUCCESS = 'succeeded',
	ERROR = 'error',
}

export interface IInitialState {
	user: IUserState | null
	status: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}

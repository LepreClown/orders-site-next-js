import instance from './interceptors'

type TypeInput = {
	url: string
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: any
}
export const api = async ({ method, url, body }: TypeInput) => {
	return instance({
		method,
		url,
		data: body,
	})
}

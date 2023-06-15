import axios from 'api/interceptors'

import { IRoles } from '@/shared/types/role.types'

import { getRoleUrl } from '../../config/url.config'

export const RoleService = {
	async getRoles() {
		return axios.get<IRoles>(getRoleUrl(''))
	},
}

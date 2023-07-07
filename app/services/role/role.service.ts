import axios from 'api/interceptors'

import { IRoles } from '@/shared/types/role.types'

import { getRolesUrl } from '../../config/api.config'

export const RoleService = {
	async getRoles() {
		return axios.get<IRoles>(getRolesUrl(''))
	},
}

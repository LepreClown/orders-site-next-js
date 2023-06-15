import { getAdminUrl } from '../../../config/url.config'

export const dataUser = [
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['serp2004@mail.ru', '29.01.21', 'пользователь'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['velikiy@mail.ru', '21.04.23', 'пользователь'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['ivan2004@mail.ru', '23.05.23', 'администратор'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['antipLOX2003@mail.ru', '12.08.23', 'менеджер'],
	},
]
export const dataOrders = [
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Ремонт', '29.01.21', 'Sberbank', 'похуй'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Ограбление', '21.04.23', 'Tinkoff', 'срочно'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Уборка', '23.05.23', 'Google', 'не похуй'],
	},
]
export const dataStatus = [
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['В ожидание', '29.01.21'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['В чем-то там', '21.04.23'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Похуй', '23.05.23'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Завершено', '23.05.23'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['Передано в жопу', '23.05.23'],
	},
]
export const dataImportant = [
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['похуй', '29.01.21'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['не похуй', '21.04.23'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['срочно', '23.05.23'],
	},
]

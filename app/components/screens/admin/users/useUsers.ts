import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IUserCreate } from '@/screens/admin/users/users.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDate } from '@/utils/date/convertDate'

import { getAdminUrl } from '../../../../config/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [orderBy, setOrderBy] = useState<string>('-created_at')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(
		['user list', debouncedSearch, currentPage, orderBy],
		() => UserService.getUsers(currentPage - 1, orderBy, debouncedSearch),
		{
			select: ({ data }) => data,

			onError(error) {
				toastError(error, 'Список пользователей')
			},
		},
	)
	const handleUserByField = (orderBy: string) => {
		setOrderBy(orderBy)
	}

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const dataUsers = queryData.isSuccess
		? queryData.data.users.map((user) => ({
				id: user.id,
				editUrl: getAdminUrl(`user/edit/${user.id}`),
				items: [
					user.telephone,
					user.name,
					user.surname,
					String(user.role),
					convertDate(user.created_at),
				],
		  }))
		: []

	const quantityUsers = Number(queryData.data?.quantity_users)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: number) => UserService.deleteUser(userId),
		{
			onError(error) {
				toastError(error, 'Удаление пользователя')
			},
			onSuccess() {
				toastr.success('Удаление пользователя', 'Пользователь удален')
				queryData.refetch()
			},
		},
	)
	const { mutateAsync: createAsync, status: createStatus } = useMutation(
		'create user',
		(data: IUserCreate) =>
			UserService.create({
				name: data.name,
				surname: data.surname,
				role: data.role,
				password: data.password,
				telephone: data.telephone,
				created_at: String(Date.now()),
			}),
		{
			onError(error) {
				toastError(error, 'Пользователь не создан')
			},
			onSuccess({ data: id }) {
				toastr.success('Пользователь', 'Пользователь успешно создан')
				push(getAdminUrl('users'))
			},
		},
	)
	const onSubmit: SubmitHandler<IUserCreate> = async (data) => {
		await createAsync(data)
	}
	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}
	return useMemo(
		() => ({
			handleSearch,
			searchTerm,
			deleteAsync,
			onPageChange,
			dataUsers,
			handleUserByField,
			quantityUsers,
			createStatus,
			currentPage,
			onSubmit,
			createAsync,
			...queryData,
		}),
		[
			handleSearch,
			handleUserByField,
			searchTerm,
			createStatus,
			deleteAsync,
			queryData,
			createAsync,
		],
	)
}

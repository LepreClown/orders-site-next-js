import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IUserEditInput } from '@/screens/admin/user/user-edit.interface'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '../../../../config/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter()

	const userId = Number(query.id)

	const { isLoading } = useQuery(['user', userId], () => UserService.getUser(userId), {
		onSuccess({ data }) {
			getKeys(data).forEach((key) => {
				setValue(key, data[key])
			})
		},
		onError(error) {
			toastError(error, 'Ошибка при получение пользователя')
		},
		enabled: !!query.id,
	})

	const { mutateAsync, data } = useMutation(
		'update user',
		(data: IUserEditInput) =>
			UserService.updateUser(userId, {
				name: data.name,
				surname: data.surname,
				role: data.role,
				password: data.password,
				telephone: data.telephone,
				created_at: data.created_at,
			}),
		{
			onError(error) {
				toastError(error, 'Ошибка при обновление пользователя')
			},
			onSuccess() {
				toastr.success('Пользователь обновлен', 'Пользователь успешно обновлен')
				push(getAdminUrl('users'))
			},
		},
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading, data }
}

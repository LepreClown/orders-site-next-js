import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfile } from '@/screens/profile/profile.interface'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useProfile = (setValue: UseFormSetValue<IProfile>) => {
	const { user } = useAuth()

	const userId = user ? user.id : null

	const displayName = (role: string) =>
		role === 'admin' ? 'Администратор' : role === 'user' ? 'Пользователь' : 'Менеджер'
	const serverName = (role: string) =>
		role === 'Администратор' ? 'admin' : role === 'пользователь' ? 'user' : 'advanced_user'

	const { isLoading } = useQuery(['profile', userId], () => UserService.getProfile(userId), {
		onSuccess({ data }) {
			setValue('name', data.name)
			setValue('surname', data.surname)
			setValue('role', displayName(data.role))
			setValue('telephone', data.telephone)
			setValue('password', data.password)
			setValue('created_at', data.created_at)
		},
		onError(error) {
			toastError(error, 'Профиль не удалось получить')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfile) =>
			UserService.updateUser(userId, {
				name: data.name,
				surname: data.surname,
				role: serverName(data.role),
				password: data.password,
				telephone: data.telephone,
				created_at: data.created_at,
			}),
		{
			onSuccess() {
				toastr.success('Профиль обновлен', 'Обновление прошло успешно')
			},
			onError(error) {
				toastError(error, 'Профиль не удалось обновить')
			},
		},
	)

	const onSubmit: SubmitHandler<IProfile> = async (data) => {
		const useName = await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}

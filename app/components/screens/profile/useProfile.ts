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

	const { isLoading } = useQuery(['profile', userId], () => UserService.getProfile(userId), {
		onSuccess({ data }) {
			setValue('telephone', data.telephone)
			setValue('name', data.name)
			setValue('surname', data.surname)
			setValue('role', data.role)
			setValue('password', data.password)
			setValue('created_at', data.created_at)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfile) => UserService.updateUser(userId, data),
		{
			onSuccess() {
				toastr.success('Профиль обновлен', 'Обновление прошло успешно')
			},
			onError(error) {
				toastError(error, 'Обновление профиля')
			},
		},
	)

	const onSubmit: SubmitHandler<IProfile> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}

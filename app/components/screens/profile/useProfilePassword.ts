import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfilePassword } from '@/screens/profile/profile.interface'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getProfile } from '../../../config/url.config'

export const useProfilePassword = () => {
	const { user } = useAuth()
	const { push } = useRouter()

	const userId = user ? user.id : null

	const { mutateAsync: mutatePassword } = useMutation(
		'patch password',
		(data: IProfilePassword) =>
			UserService.updatePassword(userId, {
				password: data.old_password,
				new_password: data.new_password,
			}),
		{
			onSuccess() {
				toastr.success('Пароль обновлен', 'Обновление прошло успешно')
				push(getProfile(''))
			},
			onError(error) {
				toastError(error, 'Обновление пароля')
			},
		},
	)
	const onSubmitPassword: SubmitHandler<IProfilePassword> = async (data2) => {
		await mutatePassword(data2)
	}

	return { onSubmitPassword }
}

import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import ProfileFieldList from '@/screens/profile/ProfileFieldList'
import { IProfile, IProfileField, IProfilePassword } from '@/screens/profile/profile.interface'
import { useProfile } from '@/screens/profile/useProfile'
import { useProfilePassword } from '@/screens/profile/useProfilePassword'

import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'
import ProfileModalButton from '@/ui/modal/ProfileModalButton/ProfileModalButton'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } = useForm<IProfile>({
		mode: 'onChange',
	})
	const {
		handleSubmit: handleSubmitPassword,
		register: registerPassword,
		formState: formStatePassword,
	} = useForm<IProfilePassword>({
		mode: 'onChange',
	})
	const { user } = useAuth()
	const { isShow, toggle } = useModal()

	const { isLoading, onSubmit } = useProfile(setValue)
	const { onSubmitPassword } = useProfilePassword()

	const dataField: IProfileField = {
		user,
		register,
		formState,
	}

	return (
		<Meta title="Профиль">
			<div className="flex justify-between">
				<Heading title="Профиль" />
				<div className="relative right-0 top-0">
					<ProfileModalButton title="пароль" toggle={toggle} />
				</div>
			</div>
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={6} className="mb-4" height={48} width={400} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<ProfileFieldList {...dataField} />
					{user.role === 'admin' && <Button>Обновить данные</Button>}
				</form>
			)}
			{isShow && (
				<Modal toggle={toggle} title="пароля">
					<form onSubmit={handleSubmitPassword(onSubmitPassword)} className={formStyles.formCreate}>
						<div>
							<Field
								{...registerPassword('old_password', {
									required: 'Пароль не указан!',
								})}
								type="text"
								placeholder="Введите старый пароль"
								error={formStatePassword.errors.old_password}
								style={{ width: '31%' }}
							/>
							<Field
								{...registerPassword('new_password', {
									required: 'Новый пароль не указан!',
								})}
								type="text"
								placeholder="Введите новый пароль"
								error={formStatePassword.errors.new_password}
								style={{ width: '31%' }}
							/>
						</div>
						<Button type="submit">Изменить пароль</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default Profile

import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import ProfileFieldList from '@/screens/profile/ProfileFieldList'
import { IProfile, IProfileField } from '@/screens/profile/profile.interface'
import { useProfile } from '@/screens/profile/useProfile'

import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } = useForm<IProfile>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useProfile(setValue)
	const { user } = useAuth()

	const dataField: IProfileField = {
		user,
		register,
		formState,
	}
	return (
		<Meta title="Профиль">
			<Heading title="Профиль" />
			{isLoading ? (
				<SkeletonLoader count={2} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<ProfileFieldList {...dataField} />
					{user.role === 'admin' && <Button>Обновить</Button>}
				</form>
			)}
		</Meta>
	)
}

export default Profile

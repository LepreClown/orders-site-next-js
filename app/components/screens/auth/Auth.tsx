import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import AuthFields from '@/components/shared/user/AuthFields'

import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import Loader from '@/ui/loader/Loader'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	const { status } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})
	const [type, setType] = useState<boolean>(true)

	const { login, logout } = useActions()

	const toggleVisible = () => {
		setType(!type)
	}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		login(data)
		reset()
	}

	return (
		<Meta title="Авторизация">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Добро пожаловать!" className={styles.heading} />
					<AuthFields
						type={type}
						register={registerInput}
						formState={formState}
						isPasswordRequired
					/>
					<span className={styles.eye} onClick={toggleVisible}>
						<MaterialIcon name="MdRemoveRedEye" />
					</span>
					<div className={styles.buttons}>
						<Button type="submit" disabled={status}>
							Войти
						</Button>
					</div>
				</form>
				{status && (
					<div className={styles.loader}>
						<Loader />
					</div>
				)}
			</section>
		</Meta>
	)
}

export default Auth

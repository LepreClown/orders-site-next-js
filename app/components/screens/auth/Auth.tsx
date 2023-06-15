import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import AuthFields from '@/components/shared/user/AuthFields'

import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'

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
	const { login, logout } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		login(data)
		reset()
	}
	return (
		<Meta title="Авторизация">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading
						title="Добро пожаловать!"
						className="mb-6 text-950 dark:text-white dark:text-opacity-80"
					/>
					<AuthFields register={registerInput} formState={formState} isPasswordRequired />
					<span className={styles.subHeading}>
						<SubHeading title="Забыли пароль?" />
					</span>
					<div className={styles.buttons}>
						<Button type="submit" disabled={status}>
							Войти
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

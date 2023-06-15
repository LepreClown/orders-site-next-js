import React, { FC, useEffect, useRef } from 'react'

import MaterialIcon from '@/ui/icons/MaterialIcon'

import styles from './Modal.module.scss'

export interface IModalProps {
	children: React.ReactNode
	toggle: () => void
	title: string
}

const Modal: FC<IModalProps> = ({ children, toggle, title }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handlerClickOutSide = (event: MouseEvent) => {
			if (modalRef.current && !event.composedPath().includes(modalRef.current)) {
				toggle()
			}
		}

		document.body.addEventListener('click', handlerClickOutSide, true)
		return () => {
			document.body.removeEventListener('click', handlerClickOutSide)
		}
	}, [])

	useEffect(() => {
		document.body.classList.add('isHidden')

		return () => {
			document.body.classList.remove('isHidden')
		}
	}, [])

	return (
		<div className={styles.overlay}>
			<div className={styles.wrapper}>
				<div className={styles.modal} ref={modalRef}>
					<div>
						<div className={styles.title}>{`Создание ${title}`}</div>
						<div onClick={toggle}>
							<MaterialIcon name="MdClose" />
						</div>
					</div>
					<div>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

//
// import { FC } from 'react'
//
// import styles from '@/ui/admin-table/AdminTable/AdminTable.module.scss'
// import formStyles from '@/ui/form-elements/adminForm.module.scss'
// import { IModalProps } from '@/ui/modal/modal.interface'
// import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
//
// const Modal: FC<IModalProps> = ({
//                                   title,
//                                   modalItems,
//                                   isLoading,
//                                   toggle,
//                                   handleSubmit,
//                                   onSubmit,
//                                   createAsync,
//                                 }) => {
//   return (
//     <>
//       {isLoading ? (
//         <SkeletonLoader count={6} height={48} className="mt-4" />
//       ) : modalItems.length ? (
//         <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
//           <div className={formStyles.fields}>
//             {modalItems.map((item) => (
//               <ModalField key={item.id} tableItem={item} createAsync={createAsync} />
//             ))}
//           </div>
//         </form>
//       ) : (
//         <div className={styles.notFound}>Ничего не найдено</div>
//       )}
//     </>
//   )
// }
//
// export default Modal

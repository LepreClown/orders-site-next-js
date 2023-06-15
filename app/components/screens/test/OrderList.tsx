// import React, { FC } from 'react'
//
// import MaterialIcon from '@/ui/icons/MaterialIcon'
//
// import { IOrder } from '@/shared/types/orders.types'
//
// import styles from './Order.module.scss'
//
// const OrderList: FC<{ order: IOrder }> = ({ order }) => {
// 	return (
// 		<div className={styles.order}>
// 			<div>
// 				<MaterialIcon name="MdArticle" />
// 				<div>
// 					<span>Заказ:</span>
// 					<span>{order?.id}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdAccountCircle" />
// 				<div>
// 					<span>Заказчик:</span>
// 					<span>
// 						{order?.creator.name} {order?.creator.surname}
// 					</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdCall" />
// 				<div>
// 					<span>Номер телефона:</span>
// 					<span>{order?.creator.telephone}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdAlarm" />
// 				<div>
// 					<span>Добавлен:</span>
// 					<span> {order?.created_at}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdLocationOn" />
// 				<div>
// 					<span>Объект:</span>
// 					<span>{order?.building.building_name}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdSettingsSystemDaydream" />
// 				<div>
// 					<span>Система:</span>
// 					<span>{order?.system.system_name}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdLabelImportant" />
// 				<div>
// 					<span>Срочность:</span>
// 					<span>{order?.important.important_name}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdRocketLaunch" />
// 				<div>
// 					<span>Материал:</span>
// 					<span>{order?.material}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<MaterialIcon name="MdOutlineEqualizer" />
// 				<div>
// 					<span>Количество:</span>
// 					<span>{order?.quantity}</span>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
//
// export default OrderList

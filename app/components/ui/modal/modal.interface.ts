import { ReactNode } from 'react'

export interface IModalProps {
	children: ReactNode
	toggle: () => void
	title: string
}

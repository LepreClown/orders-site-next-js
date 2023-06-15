import { useState } from 'react'

export const useModal = () => {
	const [isShow, setIsShow] = useState<boolean>(false)

	function toggle() {
		setIsShow(!isShow)
	}

	return {
		isShow,
		toggle,
	}
}

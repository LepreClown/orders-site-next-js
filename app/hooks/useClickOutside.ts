import { useEffect, useRef, useState } from 'react'

export const useClickOutside = (isInitialValue: boolean) => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handlerClickOutSide = (event: MouseEvent) => {
		if (ref.current && !event.composedPath().includes(ref.current)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handlerClickOutSide, true)
		return () => {
			document.removeEventListener('click', handlerClickOutSide, true)
		}
	})

	return { ref, isShow, setIsShow }
}

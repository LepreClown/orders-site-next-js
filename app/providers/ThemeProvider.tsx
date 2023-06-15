import React, { FC, PropsWithChildren } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <div>{children}</div>
}

export default ThemeProvider

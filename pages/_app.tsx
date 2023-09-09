import type {AppProps} from 'next/app'

import {TypeComponentAuthFields} from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'

import MainProvider from '../app/providers/MainProvider'
import MainProviderForAuth from '../app/providers/MainProviderForAuth'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({Component, pageProps, ...appProps}: TypeAppProps) => {
  if (['/auth'].includes(appProps.router.pathname)) {
    return (
      <MainProviderForAuth Component={Component}>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
      </MainProviderForAuth>
    )
  }

  return (
    <MainProvider Component={Component}>
			{/*@ts-ignore*/}
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp

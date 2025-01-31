import { PageContainer } from './PageContainer'
import Head from 'next/head'
import logo from '../../public/next.svg'
import { JSX } from 'react'
import { ComponentProps } from '@/interfaces/types'

export const AppLayout: React.FC<ComponentProps> = ({
  children,
}): JSX.Element => {
  return (
    <PageContainer>
      <Head>
        <title>Test App</title>
        <meta name="Test App" />
        <meta name="viewport" content="initial-scale=1" />
        <link rel="icon" href={logo.src} type="image/x-icon" />
      </Head>
      {children}
    </PageContainer>
  )
}

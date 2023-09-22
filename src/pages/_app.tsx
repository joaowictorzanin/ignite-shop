import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/Logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

// também funciona
//<img src={logoImg.src} alt="" />
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='logo ignite'/>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

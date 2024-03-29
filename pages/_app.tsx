import Layout from '../components/utilities/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

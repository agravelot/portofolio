import '../styles/index.scss'
import Layout from '../components/Layout'
import { Analytics } from '../components/Analytics'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

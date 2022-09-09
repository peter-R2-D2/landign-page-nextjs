import NavbarList from '../components/NavbarList'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.scss'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavbarList />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

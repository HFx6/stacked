import '../styles/index.css'
import '../styles/portfolio.css'
import '../styles/optimize.css'
import '../styles/news.css'
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/cssicons.css'
// import NullPrivateRoute from '../components/NullPrivateRoute';

function MyApp({ Component, pageProps }) {
  // const nullProtectedRoutes = ['/portfolio'];
  return (
    // <NullPrivateRoute nullProtectedRoutes={nullProtectedRoutes}>
      <Component {...pageProps} />
    // </NullPrivateRoute>
  )
}

export default MyApp

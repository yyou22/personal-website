import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import App from 'next/app'
import { getThemeCookie } from '../lib/theme-cookie'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

// Read the preference on the server for the initial HTML, then directly in
// the browser on navigation. These content-only pages need no data round trip.
Website.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)
  const cookies = appContext.ctx.req
    ? appContext.ctx.req.headers.cookie || ''
    : typeof document !== 'undefined' ? document.cookie : ''
  return {
    ...appProps,
    pageProps: { ...appProps.pageProps, cookies: getThemeCookie(cookies) }
  }
}

export default Website

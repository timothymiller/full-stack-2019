import React from 'react'
import {MDXProvider} from '@mdx-js/react'

export default ({Component, pageProps}) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
)
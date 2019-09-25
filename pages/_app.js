import App from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <div>
                <Head>
                    {/* SEO */}
                    <title>Template | TimKnowsBest</title>
                    <meta name="Description" content="A fast, feature-rich, and privacy preserving serverless web app template using the MERN stack with Ant Design, GraphQL, JSX in Markdown, and Next.js"></meta>
                    {/* Fixes flash of unstyled content for first load (Chromium bug) */}
                    <style
                        id="holderStyle"
                        dangerouslySetInnerHTML={{
                            __html: `
      /* https://github.com/ant-design/ant-design/issues/16037#issuecomment-483140458 */
      /* Not only antd, but also any other style if you want to use ssr. */
      *, *::before, *::after {
        transition: none!important;
      }
    `
                        }}
                    />
                </Head>
                <Component {...pageProps} />
            </div>
        )
    }
}

if (typeof window !== "undefined") {
    window.onload = () => {
        if (document.getElementById("holderStyle")) {
            document.getElementById("holderStyle").remove();
        }
    };
}

export default MyApp
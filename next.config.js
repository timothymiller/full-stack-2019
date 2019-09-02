// .MDX support
const images = require('remark-images')
const emoji = require('remark-emoji')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
})

// .LESS support
/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = withMDX(withLess({
  // Now.sh deployment target
  target: 'serverless',
  // Markdown in JSX filetype support
  pageExtensions: ['mdx', 'md', 'jsx', 'js'],
  // custom webpack config for Ant Design Less
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
}))
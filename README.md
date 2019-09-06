# MERN + Ant Design + GraphQL + Next.js Production Template

Deploying web apps to production is hard. This is a template containing optimal defaults for web apps integrating MongoDB, Express, React, & Node.js, otherwise known as the MERN stack.

I use this template as a starting point for all my web apps. I include some example components demonstrating how the backend & frontend interact interact in a serverless enviornment, including frameworks, such as MongoDB, GraphQL, TypeScript, and JSX in Markdown.

## :wrench: How to setup

```bash
git clone https://github.com/timothymiller/ant-design-next-graphql-template.git
cd ant-design-next-graphql-template
yarn
yarn dev
```

## :warning: Requirements
- [yarn](https://yarnpkg.com)
- [now-cli](https://zeit.co/download)
- [MongoDB Atlas Account](https://www.mongodb.com/download-center)

## :hamburger: Tech Stack

- MongoDB
- Express
- React
- Node

## :gem: Features

- [Ant Design](https://github.com/ant-design/ant-design)
  - Crisp, Fresh Component Library
- [TypeScript](https://github.com/microsoft/TypeScript) (.ts, .tsx)
- [Less](https://github.com/less/less.js) (.less)
- [JSX in Markdown](https://github.com/mdx-js/mdx) (.md, .mdx)
  - Great for news articles or blogging content
- [MongoDB server side](https://github.com/timothymiller/ant-design-next-graphql-template#how-to-setup-mongodb)
  - Managed NO-SQL via MongoDB Atlas
- [GraphQL client](https://github.com/timothymiller/ant-design-next-graphql-template#todo-how-to-setup-graphql)
  - Modern query language
- [Next.js](https://github.com/zeit/next.js)
  - Automatic Express routing for Node.js scripts placed in /pages/api/
  - Automatic SSR or Static Rendering depending on call to getInitialProps
  - Locally scoped CSS modules
  - Optimized images
    - Serve images in next-gen formats - Convert JPEG/PNG to WebP on the fly
    - Properly size images - Resize images on the fly
    - Efficiently encode images for CDN deployment
    - Progressive image loading
    - Optimizations for GIF & SVG files
  - Easily add [AMP](https://developers.google.com/amp/) support
  - [And much more...](https://nextjs.org/#features)
- Bundle Analyzer
```bash
# Build and analyze the back end server bundle
BUNDLE_ANALYZE=server yarn build

# Build and analyze the front end browser bundle
BUNDLE_ANALYZE=browser yarn build

# Build and analyze both server and browser
BUNDLE_ANALYZE=both yarn build

# Build and analyze neither server nor browser
yarn build
```
[alt text](https://template.timknowsbest.com/static/images/perfect-lighthouse-score.gif)
- [Google Lighthouse audit](https://web.dev/measure) Perfect 100 score in all categories
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) (PWA)

## :rocket: Deploy to Production

### Defaults

- Scaling is handled automatically when targeting serverless deployment to Now by ZEIT.

- Resources inside of /static/ are deployed to the in-house CDN managed via Now by ZEIT.

```bash
now login
now --prod
```

## :construction: Roadmap

- Remove unused CSS with [next-purgecss](https://github.com/lucleray/next-purgecss) once Ant Design is supported
- Typography.js integration

## :microscope: Tutorials

### How to setup MongoDB

Create a file called '.env' (no single quotes) in the root directory with the following text

```bash
MONGODB_URI="<mongodb_uri>"
```

Replace <mongodb_uri> with the uri provided for the database you created from MongoDB Atlas.

Sensitive credentials must be stored with adequate security in a production enviornment. For this, I use Now Secrets. Add an environment variable called MONGODB_URI to your web app for accessing your MongoDB instance by executing the following command:

```bash
now secrets add MONGODB_URI <mongodb_uri>
```

Use

```bash
now dev
```

instead of

```bash
yarn dev
```

Now handles loading enviornment variables into your runtime config behind the scenes.

- Checkout /api/add-email & /components/EmailList for examples on interacting with MongoDB in a serverless MERN stack.

### TODO How to setup GraphQL

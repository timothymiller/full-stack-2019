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
  - Easily add [AMP](https://developers.google.com/amp/) support
  - Automatic SSR or Static Rendering depending on call to getInitialProps
  - [And much more...](https://nextjs.org/#features)
- Perfect 100 [Google Lighthouse audit](https://web.dev/measure) score
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

## :microscope: Tutorials

### How to setup MongoDB

Create a file called '.env' (no single quotes) in the root directory with the following text, replacing <mongodb_uri> with the uri provided for the database you created from MongoDB Atlas.

```bash
MONGODB_URI="<mongodb_uri>"
```

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

to handle loading enviornment variables into your runtime config.
4. Checkout /api/add-email & /components/EmailList for examples on interacting with MongoDB in a serverless MERN stack.

### TODO How to setup GraphQL

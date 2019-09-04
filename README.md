# MERN + Ant Design + GraphQL + Next.js Production Template

Deploying web apps to production is hard. This is a template containing optimal defaults for web apps integrating MongoDB, Express, React, & Node.js, otherwise known as the MERN stack.

I use this template as a starting point for all my web apps. I include some example components demonstrating how the backend & frontend interact interact in a serverless enviornment, including frameworks, such as MongoDB, GraphQL, TypeScript, and Markdown in JSX.

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

- Ant Design
  - Crisp, Fresh Component Library
- TypeScript (.ts, .tsx)
- Less (.less)
- Markdown in JSX (.md, .mdx)
  - Great for news articles or blogging content
- MongoDB server side
  - Managed NO-SQL via MongoDB Atlas
- GraphQL client
  - Modern query language
- Next.js
  - Automatic Express routing for Node.js scripts placed in /pages/api/ 
  - Easily add AMP support
  - Automatic SSR or Static Rendering depending on call to getInitialProps
- Perfect 100 Google Lighthouse audit score
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - Progressive Web App (PWA)

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

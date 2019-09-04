# MERN + Ant Design + GraphQL + Next.js Production Template

Deploying web apps to production is hard. This is the template I use for all MERN stack based Web Apps.

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
  - Best Practices
  - Fanicer Stuff
  - Progressive Web App (PWA)

## :rocket: Deploy to Production
#### Defaults:
  - Scaling is handled automatically when targeting serverless deployment to Now by ZEIT.
  - Resources inside of /static/ are deployed to the in-house CDN managed via Now by ZEIT.

```bash
now login
now --prod
```

## :microscope: Tutorials

### TODO How to setup MongoDB

### TODO How to setup GraphQL

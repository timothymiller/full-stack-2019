<p align="center"><a href="https://template.timknowsbest.com" target="_blank" rel="noopener noreferrer"><img width="256" src="/static/favicon/icons-512.png" alt="MERN + Ant Design + GraphQL + Next.js Template logo"/></a></p>

# MERN + Ant Design +  GraphQL + Next.js Production Template

Deploying web apps to production is hard. This GPLv3-licensed open source template contains sensible defaults for web apps integrating a database (MongoDB, MySQL, or PostgreSQL), Express, React, & Node.js, otherwise known as the MERN stack.

This template improves upon a pure MERN stack by including nice-to-have technologies, such as Ant Design, GraphQL, TypeScript, LESS, and JSX in Markdown. I include some example components demonstrating how the frontend & backend interact, following best practices in a serverless enviornment.

I use this template as a starting point for all my web apps. If this template helps you, please consider [leaving me an endorsement on LinkedIn](https://www.linkedin.com/in/timothymillerdev/).

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

- MongoDB, MySQL, or PostgreSQL
- Express
- React
- Node

## :gem: Features

- [Ant Design](https://github.com/ant-design/ant-design)
  - Crisp, Fresh Component Library
- [GraphQL](https://github.com/timothymiller/ant-design-next-graphql-template#how-to-setup-graphql)
  - Modern query language
  - RESTLess example
    - Query data with GraphQL (client and/or server side)
- RESTful example
  - Receiving form data via POST request
  - Inserting into MongoDB
- Serverless Database
  - MongoDB ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
  - MySQL ([AWS Aurora](https://aws.amazon.com/rds/aurora/))
  - PostgreSQL ([AWS Aurora](https://aws.amazon.com/rds/aurora/))
- No vendor lock-in
  - Runs on open source software
  - Serverless Node.js
    - [AWS Lambda](https://aws.amazon.com/lambda/)
    - [Zeit Now](https://zeit.co/)
    - [Firebase Functions](https://firebase.google.com/docs/functions)
    - [Heroku](https://www.heroku.com/)
  - Static images are optimized at build time before delivery to CDN. (No Cloudinary necessary)
- [TypeScript](https://github.com/microsoft/TypeScript) (.ts, .tsx)
- [Less](https://github.com/less/less.js) (.less)
- [JSX in Markdown](https://github.com/mdx-js/mdx) (.md, .mdx)
  - Great for news articles or blogging content
- [Next.js](https://github.com/zeit/next.js)
  - Automatic Express routing for Node.js scripts placed in /pages/api/
  - Automatic SSR or Static Rendering depending on call to getInitialProps
  - Optimized images
    - Serve images in next-gen formats - Convert JPEG/PNG to WebP on the fly
    - Properly size images - Resize images on the fly
    - Efficiently encode images for CDN deployment
    - Progressive image loading
    - Optimizations for GIF & SVG files
  - Easily add [AMP](https://developers.google.com/amp/) support
  - [Webpack Bundle Analyzer](https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer)
  - [And much more...](https://nextjs.org/#features)  
- [Google Lighthouse audit](https://web.dev/measure) Perfect 100 score in all categories
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) (PWA)

![Perfect Lighthouse score|52x37](https://template.timknowsbest.com/static/images/perfect-lighthouse-score.gif)

## :rocket: Deploy to Production

### Defaults

- Scaling is handled automatically when targeting serverless deployment to Now by ZEIT.

- Resources inside of /static/ are deployed to the in-house CDN managed via Now by ZEIT.

```bash
now login
now --prod
```

## :construction: Roadmap

- Locally scoped CSS modules (Ant Design requires globally scoped styles)
- Remove unused CSS with [next-purgecss](https://github.com/lucleray/next-purgecss) once Ant Design is supported
- Typography.js integration

## :microscope: Tutorials

### How to setup MongoDB

Create an account on MongoDB Atlas and create a free tier managed database.

Copy the connection string for accessing the database.

Replace username & password with your database credentials.

Create a file called '.env' (no single quotes) in the root directory with the following text

```bash
MONGODB_URI=your_mongodb_uri_here
```

Replace your_mongodb_uri_here with the uri provided for the database you created from MongoDB Atlas.

Sensitive credentials must be stored with adequate security in a production enviornment. For this, I use Now Secrets. Add an environment variable called MONGODB_URI to your web app for accessing your MongoDB instance by executing the following command:

```bash
now secrets add MONGODB_URI your_mongodb_uri_here
```

Now handles loading enviornment variables into your runtime config behind the scenes. To allow Now to manage your secrets in development mode, use

```bash
now dev
```

instead of

```bash
yarn dev
```

- Checkout [/api/add-email-subscriber](https://github.com/timothymiller/mern-ant-design-graphql-next-template/blob/master/pages/api/add-email-subscriber.js) & [/components/EmailListForm](https://github.com/timothymiller/mern-ant-design-graphql-next-template/blob/master/components/EmailListForm/EmailListForm.jsx) for examples on interacting with MongoDB in a serverless MERN stack.

[Read more](https://timknowsbest.com/how-to-setup-mongodb)

### How to setup GraphQL

Under apollo/datasources/MyAPI.js

```javascript
this.baseURL = 'http://localhost:3000/api/';
```

must be changed to your production URL before deployment.

[Read more](https://timknowsbest.com/how-to-setup-graphql)

## License 

This Template is licensed under the [GNU General Public License, version 3 (GPLv3)](http://www.gnu.org/licenses/gpl-3.0.html) and is distributed free of charge.


## Author

Timothy Miller

* GitHub: [https://github.com/timothymiller](https://github.com/timothymiller) :bulb:

* Website: [https://timknowsbest.com](https://timknowsbest.com) :computer:

* Donation: [https://timknowsbest.com/donate](https://timknowsbest.com/donate) :money_with_wings:
import {
  Layout,
  PageHeader,
  Button
} from 'antd';
import "./style.less";
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Welcome from './welcome.md';
import MongoDBDemo from '../components/MongoDBDemo/MongoDBDemo';
import GraphQLDemo from '../components/GraphQLDemo/GraphQLDemo';
import headerIcon from '../static/favicon/icons-192.png?webp?resize&size=48';
import withData from '../lib/apollo';

const { Content, Footer } = Layout;

const components = {
  wrapper: props => (
    <div style={{ padding: '0px 24px' }}>
      <main {...props} />
    </div>
  )
};

const Home = () => (

  <Layout>
    <PageHeader title="Template"
      avatar={{
        src: headerIcon
      }}
      extra={[
        <Button href="https://github.com/timothymiller/mern-ant-design-graphql-next-template"
          key="view-source-code-button">View Source Code</Button>,
        <Link key="privacy-policy-link" href="/privacy-policy">
          <Button key="privacy-policy-button" type="primary">View Privacy Policy</Button>
        </Link>,
      ]}>
    </PageHeader>
    <Content>
      <GraphQLDemo />
      <MongoDBDemo />
      <MDXProvider components={components}>
        <Welcome />
      </MDXProvider>
    </Content>
    <Footer style={{ textAlign: 'center', padding: '32px' }}>This is a footer</Footer>
  </Layout>
)

export default withData(Home);
import {
  Layout,
  PageHeader,
  Button
} from 'antd';
import "./style.less";

const { Header, Content, Footer } = Layout;

import Link from 'next/link';

import { MDXProvider } from '@mdx-js/react';
import Welcome from './welcome.md';

const components = {
  wrapper: props => (
    <div style={{ padding: '8px 32px' }}>
      <main {...props} />
    </div>
  )
};

export default () => (
  
  <Layout>
    <Header>
      <PageHeader title="Template"
      extra={[
          <Button href="https://github.com/timothymiller/mern-ant-design-graphql-next-template"
           key="2">View Source Code</Button>,
        <Link href="/privacy-policy">
          <Button key="1" type="primary">View Privacy Policy</Button>
        </Link>,
      ]}>
      </PageHeader>
    </Header>
    <Content>
      <MDXProvider components={components}>
        <Welcome />
      </MDXProvider>
    </Content>
    <Footer style={{ textAlign: 'center', padding: '32px' }}>Created by Timothy Miller</Footer>
  </Layout>
)
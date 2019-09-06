import React from 'react'
import {
  Layout,
  PageHeader
} from 'antd';
import { MDXProvider } from '@mdx-js/react';
import PrivacyPolicy from './PrivacyPolicy.mdx';

const { Content } = Layout;

const components = {
  wrapper: props => (
    <div style={{ padding: '8px 32px' }}>
      <main {...props} />
    </div>
  )
};

export default props => (
  <Layout>
    <PageHeader title="Privacy Policy"
      onBack={() => history.back()} />
    <Content>
      <MDXProvider components={components}>
        <PrivacyPolicy {...props} />
      </MDXProvider>
    </Content>
  </Layout>
);
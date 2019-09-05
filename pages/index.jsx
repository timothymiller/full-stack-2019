import {
  Layout,
  PageHeader
} from 'antd';
import "./style.less";

import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner'

export default () => (
  <Layout>
    <PageHeader
      title="Template"
      subTitle=""
    >
    </PageHeader>
    <WelcomeBanner />
  </Layout>
)
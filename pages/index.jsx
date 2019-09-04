import {
  Layout,
  PageHeader
} from 'antd';
import "./style.less";

import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner'

export default () => (
  <Layout>
    <PageHeader
      title="TimKnowsBest"
      subTitle="dot com"
    >
    </PageHeader>
    <WelcomeBanner />
  </Layout>
)
import {
    Form,
    Layout,
    PageHeader,
    Tabs, Statistic, Row, Col
  } from 'antd';
  import "./style.less";
  
const { TabPane } = Tabs;

import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const Description = ({ term, children, span = 12 }) => (
    <Col span={span}>
      <div className="description">
        <div className="term">{term}</div>
        <div className="detail">{children}</div>
      </div>
    </Col>
  );
  
  const content = (
    <Row>
      <Description term="Created">Lili Qu</Description>
      <Description term="Association">
        <a>421421</a>
      </Description>
      <Description term="Creation Time">2017-01-10</Description>
      <Description term="Effective Time">2017-10-10</Description>
      <Description term="Remarks" span={24}>
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </Description>
    </Row>
  );
  
  const extraContent = (
    <Row>
      <Col span={12}>
        <Statistic title="Status" value="Pending" />
      </Col>
      <Col span={12}>
        <Statistic title="Price" prefix="$" value={568.08} />
      </Col>
    </Row>
  );

export default () => (
<Layout>
    <PageHeader
        onBack={() => window.history.back()}
        title="Registration"
        subTitle="New Client"
       
        footer={
        <Tabs defaultActiveKey="1">
            <TabPane tab="Details" key="1" />
            <TabPane tab="Rules" key="2" />
        </Tabs>
        }
    >
    </PageHeader>
    <WrappedRegistrationForm/>
</Layout>
)
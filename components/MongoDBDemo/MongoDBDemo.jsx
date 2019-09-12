import './style.less';
import {
    Form,
    Card,
} from 'antd';
const { Meta } = Card;
import EmailListForm from '../EmailListForm/EmailListForm';

const WrappedEmailListForm = Form.create({ name: 'register' })(EmailListForm);

class MongoDBDemo extends React.Component {

    render() {
        return (
            <Card className="Card" hoverable="true" title="MongoDB + REST API Demo">
                <Meta style={{ padding: "0px 0px 16px 0px" }} title="Subscribe to this demo email list" />
                <WrappedEmailListForm />
            </Card>
        );
    }
}

export default MongoDBDemo;
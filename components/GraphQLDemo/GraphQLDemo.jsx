import './style.less';
import {
    Card,
} from 'antd';
const { Meta } = Card;

class GraphQLDemo extends React.Component {

    render() {
        return (
            <Card className="Card" hoverable="true" style={{ width: 460 }} title="GraphQL Demo">
                <Meta style={{ padding: "0px 0px 16px 0px" }} title="Current number of demo email list subscribers:" />

            </Card>
        );
    }
}

export default GraphQLDemo;
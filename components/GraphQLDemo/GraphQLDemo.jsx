import './style.less';
import {
    Card,
} from 'antd';
const { Meta } = Card;
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status @client
    }
  }
`

const GraphQLDemo = () => {

    const {
        data: { viewer }
    } = useQuery(ViewerQuery)

    if(viewer) {
        render(
            <Card className="Card" hoverable="true" style={{ width: 460 }} title="GraphQL Demo">
                <Meta style={{ padding: "0px 0px 16px 0px" }} title="Current number of demo email list subscribers:" />
    
            </Card>
        );
    }
    return null;
}

Index.getInitialProps = async ({ client }) => {
    await client.query({ query: ViewerQuery })
  }

export default GraphQLDemo;
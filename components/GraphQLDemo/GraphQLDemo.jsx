import './style.less';
import {
    Card,
} from 'antd';
const { Meta } = Card;
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_SUBSCRIBERS = gql`
  query GET_SUBSCRIBERS {
    subscribers {
      name
    }
  }
`

const GraphQLDemo = () => {

  const {
    loading,
      data: { subscribers }
  } = useQuery(GET_SUBSCRIBERS, {
    notifyOnNetworkStatusChange: true
  });

  let contents;
  if(loading) {
    contents = <div>Now loading...</div>
  } else {
    if(subscribers != undefined && subscribers) {
      contents = <div>
      {subscribers.map((subscriber, index) => (
          <p key = {index + "_subscriber"}>{subscriber.name}</p>
      ))}
      </div>
    } else {
      contents = <div>No subscribers</div>
    }
  }

  return (
      <Card className="Card" hoverable="true" title="GraphQL Demo">
          <Meta style={{ padding: "0px 0px 16px 0px" }} title="Demo email list subscribers:" />
          {contents}
      </Card>
  )
}

export default GraphQLDemo;
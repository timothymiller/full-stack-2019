import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL
  })
}

export default withData(config)
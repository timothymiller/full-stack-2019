import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../apollo/type-defs'
import { resolvers } from '../../apollo/resolvers'

// REST API datasource
import MyAPI from '../../apollo/datasources/MyAPI'

// Database datasource
// import MySQLDatabase from '../../apollo/datasources/MySQLDatabase'

// Caching server for serverless GraphQL
// import { RedisCache } from 'apollo-server-cache-redis'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  uploads: false,
  playground: true,
  dataSources: () => ({ 
    // db: new MySQLDatabase(),
    restAPI: new MyAPI()
  }),
  // cache: new RedisCache({
  //   host: 'redis-server',
  // }),
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
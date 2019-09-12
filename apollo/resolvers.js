export const resolvers = {
    Query: {
      subscribers (_parent, _args, _context, _info) {
        return _context.dataSources.restAPI.getSubscribers();
      }
      
    }
  }
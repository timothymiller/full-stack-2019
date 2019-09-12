const { RESTDataSource } = require('apollo-datasource-rest');

class MyAPI extends RESTDataSource {
  constructor() {
    super();
    // During DEVELOPMENT change this to http://localhost:3000/api/
    this.baseURL = 'http://localhost:3000/api/'; 
    // Before deployment to production, change to production URL
    // eg: 'https://template.timknowsbest.com/api/';
  }

  async getSubscribers() {
      const response = await this.get('subscribers');
      return Array.isArray(response)
      ? response.map(launch => this.subscriberReducer(launch))
      : [];
  }

  subscriberReducer(subscriber) {
    return {
        name: subscriber.name,
      };
  }

}

module.exports = MyAPI;
// PostgreSQL connector to database hosted on AWS Aurora
import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

const knex = require('knex')({
  client: 'pg',
  connection: process.env.POSTGRESQL_URI
});

class MySQLDatabase extends SQLDataSource {
  constructor() {
    super();
    // Add your instance of Knex to the DataSource
    this.db = knex;
  }

  getUsers() {
    // This can be any valid Knex query
    const query = this.db.select().from("users");

    // A promise without any caching or batching
    // return query;

    // Batch the query with DataLoader - RETURNS A RAW RESPONSE
    // return this.getBatched(query);

    // Cache the result for 1 minute
    // return this.getCached(query, MINUTE);

    // Batch the query and cache the result for 1 minute - RETURNS A RAW RESPONSE
    return this.getBatchedAndCached(query, MINUTE);
  }
}

export default MySQLDatabase;
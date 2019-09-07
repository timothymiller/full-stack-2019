const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
    // If the database connection is cached,
    // use it instead of creating a new connection
    if (cachedDb) {
        return cachedDb
    }

    // If no connection is cached, create a new one
    const client = await MongoClient.connect(uri, { useNewUrlParser: true })

    // Select the database through the connection,
    // using the database path of the connection string
    const db = await client.db(url.parse(uri).pathname.substr(1))

    // Cache the database connection and return the connection
    cachedDb = db
    return db
}

export default (req, res) => {
    switch (req.method) {
        case "GET":
            break;

        case "POST":
            const emailAddress = req.body.emailAddress;
            console.log(emailAddress);
            // Get a database connection, cached or otherwise,
            // using the connection string environment variable as the argument
            const db = await connectToDatabase(process.env.MONGODB_URI)

            // Select the "users" collection from the database
            const collection = await db.collection('users')

            // Select the users collection from the database
            const users = await collection.find({}).toArray()

            res.status(200).json({numEmailSubscribers: users.length});
            break;

        default:
            // https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers 
            res.status(400).end();
            break;
    }
}
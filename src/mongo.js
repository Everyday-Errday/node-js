const { MongoClient } = require("mongodb");

const client = new MongoClient('mongodb://root:rootroot@127.0.0.1:27017', {
    directConnection: true,
    replicaSet: 'rs0',
    readPreference: 'secondaryPreferred',
    retryWrites: false,
    authMechanism: 'DEFAULT',
    tls: false
});
const main = async () => {
    await client.connect();

    const db = client.db('db_name');
    const collection = db.collection('collection');

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
};

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
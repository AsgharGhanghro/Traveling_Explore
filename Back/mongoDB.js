const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dataBase = 'contact';
const client = new MongoClient(url);

async function dbConnect(){
  let data = await client.connect();
  db = data.db(dataBase);
  return db.collection('user');
}

module.exports = dbConnect;
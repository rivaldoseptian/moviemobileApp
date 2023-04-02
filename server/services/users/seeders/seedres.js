const { MongoClient } = require("mongodb");
const { hashPassword } = require("../helpers/bycript");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

// Database Name
const dbName = "dbMovie";

async function run() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection("users");
    const option = { ordered: true };

    const docs = require("./seeder-user.json");
    docs.map((el) => {
      el.password = hashPassword(el.password);
    });
    const result = await users.insertMany(docs, option);

    console.log(result);

    // the following code examples can be pasted here...
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

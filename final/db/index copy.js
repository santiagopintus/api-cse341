require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

/* Defining the connection */
const uri = process.env.MONGODB_URI;
/* Check if the URI exists before trying to connect */
if (!uri) {
  throw new Error("MONGODB_URI environment variable not set");
}
const client = new MongoClient(uri);

/* Connecting */
const getData = async (col, id = null) => {
  try {
    await client.connect();
    const contactsCollection = client
      .db(process.env.DATABASE_NAME)
      .collection(col);
    let q = {};
    if (id) {
      q = id ? { _id: new ObjectId(id) } : {};
    }
    const cursor = await contactsCollection.find(q);
    const results = await cursor.toArray();
    return results;
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

// getCollectionData("contacts").catch(console.error);

module.exports.getData = getData;

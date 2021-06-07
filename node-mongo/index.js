const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url, { useUnifiedTopology: true });
const dbname = "conFusion";

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);

  console.log("Connected correctly to server");

  const db = client.db(dbname);

  dboper.insertDocument(
    db,
    { name: "vadonut", description: "Test" },
    "dishes",
    result => {
      console.log("Insert Document:\n", result.ops);

      dboper.findDocumets(db, "dishes", docs => {
        console.log("Found documents:\n", docs);

        dboper.updateDocument(
          db,
          { name: "Vadonut" },
          { description: "Updated Test" },
          "dishes",
          result => {
            console.log("Updated document:\n", result.result);

            dboper.findDocumets(db, "dishes", docs => {
              console.log("Found documents:\n", docs);

              db.dropCollection("dishes", result => {
                console.log("Dropped collecion:", result);

                client.close();
              });
            });
          }
        );
      });
    }
  );
});

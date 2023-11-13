const express = require("express");
const { MongoClient } = require("mongodb");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// connect to mongodb
const uri = "mongodb://localhost:27017/mydb"; // Replace with your database URL

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/connect", (req, res) => {
  res.json({ message: "connect database successfully " });
});

app.listen(6060, () => {
  console.log(`Server is running on port 6060.`);
});

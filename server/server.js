const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// connect to mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Connect to database!"))
  .catch((err) => console.log(err));

// schema
const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

//
const userModle = mongoose.model("user", userSchema);

//api signup
app.post("/signup", async (req, res) => {
  const { email } = req.body; // check in email have into database
  try {
    const result = await userModle.findOne({ email: email });
    console.log(result);

    if (result) {
      res.send({ message: "email is already registered", alert: false });
    } else {
      const data = new userModle(req.body);
      await data.save();
      res.send({ message: "successfully sing up", alert: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "an error occurred" });
  }
});

// api login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await userModle.findOne({
      email: email,
      password: password,
    });
    console.log(result);
    if (result) {
      const dataSend = {
        id: result._id,
        name: result.name,
        phone: result.phone,
        email: result.email,
      };
      console.log(dataSend);
      res.send({ message: "login successfully", alert: true, data: dataSend });
    } else {
      res.send({ message: "check email and password", alert: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "an error occurred" });
  }
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/connect", (req, res) => {
  res.json({ message: "connect database successfully " });
});

app.listen(6060, () => {
  console.log(`Server is running on port 6060.`);
});

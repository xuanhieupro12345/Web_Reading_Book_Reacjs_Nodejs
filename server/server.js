const express = require("express");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

app.use(
  fileupload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
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

// schema
const schemaProduct = mongoose.Schema({
  nameBook: {
    type: String,
    unique: true,
  },
  imageBook: {
    type: String,
    unique: true,
  },
  author: String,
  category: String,
  publishing: String,
  updateDay: String,
  description: String,
});

const productModle = mongoose.model("uploadproduct", schemaProduct);

// api product
app.post("/uploadProduct", async (req, res) => {
  const { nameBook, imageBook } = req.body;

  try {
    // Convert imageBook to a string if it's an object
    const imageBookString =
      typeof imageBook === "object" ? JSON.stringify(imageBook) : imageBook;

    const result = await productModle.findOne({
      imageBook: imageBookString,
      nameBook: nameBook,
    });

    console.log(result);

    if (result) {
      res.send({ message: "sánh này đã upload", alert: false });
    } else {
      // Save the product with the converted imageBook
      const data = new productModle({
        ...req.body,
        imageBook: imageBookString,
      });
      await data.save();
      res.send({ message: "upload thành công", alert: true });
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

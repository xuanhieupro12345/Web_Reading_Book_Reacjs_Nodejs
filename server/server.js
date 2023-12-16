const express = require("express");
require("dotenv").config();
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
  .connect(process.env.MONGODB_URL)
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

// api add product
app.post("/addupload", async (req, res) => {
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

// put data
app.get("/product", async (req, res) => {
  const data = await productModle.find({});
  res.send(JSON.stringify(data));
});

//delete
app.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await productModle.deleteOne({ _id: productId });

    if (result.deletedCount > 0) {
      res.send({ message: "Product deleted successfully", alert: true });
    } else {
      res.send({ message: "Product not found", alert: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "An error occurred" });
  }
});

//edit
app.put("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await productModle.updateOne(
      { _id: productId },
      { $set: req.body }
    );

    if (result.nModified > 0) {
      res.send({ message: "Product edited successfully", alert: true });
    } else {
      res.send({
        message: "Product not found or no changes made",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "An error occurred" });
  }
});

app.listen(6060, () => {
  console.log(`Server is running on port 6060.`);
});

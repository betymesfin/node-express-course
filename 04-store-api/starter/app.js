require("dotenv").config();
require('express-async-errors');
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const not_found = require("./middleware/not-found");
const error_Handler = require("./middleware/error-handler");
const PORT = process.env.PORT || 3000;

const productRouter = require('./routes/products')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> STORE API</h1> <a href= '/api/v1/products'> products </a>");
});

app.use('/api/v1/products',productRouter)

app.use(not_found);
app.use(error_Handler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {}
};
start();

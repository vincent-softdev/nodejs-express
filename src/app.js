const express = require("express");
const productsRouter = require("./routes/productRoutes");

const app = express();
app.use(express.json());

// Register routes
app.use("/api", productsRouter);

module.exports = app;

const express = require("express");
const productsRouter = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

// Register routes
app.use("/api", productsRouter);

// Error handler middleware
app.use(errorHandler);

module.exports = app;

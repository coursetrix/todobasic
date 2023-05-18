const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

const uri = "mongodb://localhost:27017/todobasic_db";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

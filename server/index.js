const db_connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

db_connection();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Server listening on ${port}...`));

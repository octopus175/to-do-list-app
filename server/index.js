const tasks = require("./routes/tasks");
const doenv = require('dotenv').config()

const db_connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

db_connection();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Server listening on ${port}...`));

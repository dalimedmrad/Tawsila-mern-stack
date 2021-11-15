console.clear()
require('dotenv').config();
const express = require('express')
const app = express();
const cors = require("cors");
const connectDB = require('./config/dbConnect');

app.use("/uploads", express.static("uploads"));


app.use(cors());
connectDB();
app.use(express.json());
app.use("/api/user",require('./routes/user'));
app.use("/api/trajet",require('./routes/trajet'));
app.use("/api/user/upload",require("./routes/upload"));



const PORT = process.env.PORT
app.listen(PORT,(err) => err ? console.log(err): console.log(`server is runnig ${PORT}`));
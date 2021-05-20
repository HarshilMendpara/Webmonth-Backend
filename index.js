const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");
const client = require("./configs/database");
require("dotenv").config();

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send(`hello nice to see you`);
});

app.use("/auth",authRoutes);
app.use("/note",noteRoutes)

client.connect(() => {
    console.log(`database connected`);
})

app.listen(port,()=>{
    console.log("server running at port "+port);
});
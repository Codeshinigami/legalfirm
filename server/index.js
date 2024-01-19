const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const openaiRouter  = require("./routes/openai");
const usersRouter = require("./routes/users");
const chatsRouter = require("./routes/chats")

require("dotenv").config();

connectDb();

//allowed origins
const allowedOrigin = process.env.ACCESS_URL;

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/aiApi",openaiRouter);
app.use(usersRouter);
app.use(chatsRouter);

const PORT = process.env.PORT;

app.listen(PORT , () =>{
    console.log(`Server is running on port = ${PORT}`)
})
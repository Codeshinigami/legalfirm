const express = require("express");
const app = express();
const cors = require("cors");
const openaiRouter  = require("./routes/openai");
const usersRouter = require("./routes/users")

require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//allowed origins
const allowedOrigin = process.env.ACCESS_URL;

// Use a middleware function to set the header dynamically
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();

});

app.use(openaiRouter);
app.use(usersRouter);

const PORT = process.env.PORT;

app.listen(PORT , () =>{
    console.log(`Server is running on port = ${PORT}`)
})
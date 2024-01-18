const userModel = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwt_secret = process.env.JWT_SECRET;

//function to generate jwt token
const generateJWT = async (name, email) => {
  const jwt_token = jwt.sign({ name: name, email: email }, jwt_secret, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
  return jwt_token;
};

//to decode jwt to provide email and name
const decodeJWT = async (req, res) => {
  try {
    const { jwt_token } = req.body;

    const decoded =
      jwt.verify(jwt_token, jwt_secret, { algorithms: ["HS256"] }) || null;
    if (decoded) {
      const { name, email } = decoded;
      res.json({ name: name, email: email });
    } else {
      res.json({ error: "Invalid JWT." });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: "Internal server error." });
  }
};

//register route for creating new user
// !need to handle some errors

const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
        res.json({ error: "name ,email and password are required." });
        return;
        }

        const salt = await bcrypt.genSalt(11);
        const hashedpassword = await bcrypt.hash(password, salt).catch((err) => {
        console.error(err);
        res.json({ error: "error while gen password hash." });
        });

        const userData = {
        name: name,
        email: email,
        password: hashedpassword,
        };

        //saving userdata in database
        try {
        const user = new userModel(userData);
        await user.save();
        } catch (err) {
        console.error(err);
        res.json({ error: "error occured while creating an user." });
        }

        //generate jwt token
        const jwt_token = await generateJWT(name, email);

        //setting cookie expiration to 1 day
        const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

        res.cookie("jwt", jwt_token, { expires: expirationDate });
        res
        .status(201)
        .json({ success: "user created successfully.", jwt_token: jwt_token });
    } catch (err) {
        console.log(err);
        res.json({ error: "Internal server error" });
    }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("username and password are needed.");
      res.json({ error: "username and password are needed." });
    }

    const userInDatabase =
      (await userModel.findOne({ email: email }).catch((err) => {
        res.json({ error: "error while finding user in database." });
      })) || null;

    if (userInDatabase) {
      const verifiedPass = await bcrypt.compare(
        password,
        userInDatabase.password
      );

      if (verifiedPass) {
        //generate jwt token
        const jwt_token = await generateJWT(
          userInDatabase.name,
          userInDatabase.email
        );

        res.cookie("jwt", jwt_token, { expiresIn: "1d" });
        res.json({ success: "logged in succesfully" });
      } else {
        res.json({ error: "incorrect password." });
      }
    } else {
      res.json({ error: "cannot find user in database." });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: "Internal Server Error." });
  }
};

module.exports = { createUser, loginUser };

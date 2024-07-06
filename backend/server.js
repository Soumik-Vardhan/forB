require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());
const User = require("./user");
const UserFin = require("./user_fin");

const posts = [
  {
    id: "13",
    username: "kyle",

    title: "manager",
    password: "lamar",
    isadmin: false,
  },
  {
    id: "34",
    username: "miles",
    title: "employee",
    password: "fuckyou",
    isadmin: false,
  },
  {
    id: "45",
    username: "kendrick",
    title: "manager",
    password: "meowmeow",
    isadmin: false,
  },
  {
    id: "64",
    username: "soumik",
    title: "admin",
    password: "iamadmin",
    isadmin: true,
  },
  {
    id: "98",
    username: "kimuos",
    title: "admin",
    password: "dingdong",
    isadmin: true,
  },
];
app.use(cors());
let refreshTokens = [];
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json("you ar not authenticated");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    // err && console.log(err);
    if (err) {
      console.log(err);
      return res.status(500).json("Intrnal Server Error");
    }
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = createAccessToken(user);
    const newRefreshToken = createRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
});

app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log(username, password);
    const user = await User.findOne({ userName: username });
    // console.log("prnting the user", user);
    // if (user && bcrypt.compareSync(password, user.password))
    if (user && user.password === password) {
      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user);
      refreshTokens.push(refreshToken);
      res.json({
        id: user._id,
        aid: user.userName,
        isAdmin: user.isAdmin,
        accessToken,
        refreshToken,
      });
    } else {
      res.status(400).json("Username or password is incorrect");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

// app.post("/auth/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = posts.find((users) => {
//     return users.username === username && users.password === password;
//   });
//   if (user) {
//     const accessToken = createAccessToken(user);
//     const refreshToken = createRefreshToken(user);
//     refreshTokens.push(refreshToken);
//     // const accessToken = jwt.sign(
//     //   {
//     //     id: user.id,
//     //     userName: user.username,
//     //     role: user.title,
//     //     isadmin: user.isadmin,
//     //   },
//     //   process.env.ACCESS_TOKEN_SECRET,
//     //   { expiresIn: "22s" }
//     // );

//     // const refreshToken = jwt.sign(
//     //   {
//     //     id: user.id,
//     //     userName: user.username,
//     //     role: user.title,
//     //     role: user.title,
//     //     isadmin: user.isadmin,
//     //   },
//     //   process.env.REFRESH_TOKEN_SECRET,
//     //   { expiresIn: "2m" }
//     // );
//     res.json({
//       id: user.username,
//       isAdmin: user.isadmin,
//       accessToken,
//       refreshToken,
//     });
//   } else {
//     res.status(400).json("username or password is incorrect ");
//   }
//   res.json(username);
// });

const createAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1m" }
  );
};
const createRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1m" }
  );
};

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};

app.get("/details/:userID", verify, (req, res) => {
  if (req.user.isadmin || req.user.id === req.params.userID) {
    console.log(req.user.isadmin);
    res.json(posts);
  } else {
    res.status(403).json("only admin access these details sorry");
  }
});

app.delete("/delete/:userID", verify, (req, res) => {
  if (req.user.id === req.params.userID || req.user.isadmin) {
    res.status(200).json("user has deleted");
  } else {
    res.status(403).json("you don't hve access for this operation");
  }
});

app.post("/register", async (req, res) => {
  try {
    const userDetails = await User.create(req.body);
    res.status(200).json(userDetails);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("you have logged out sucessfullt");
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/assetalchemy", {})
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(4000, () => {
      console.log("node api is runnin in 4000 port");
    });
  })
  .catch((error) => {
    console.log(error);
  });

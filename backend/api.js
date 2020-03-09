const express = require("express");
const serverless = require("serverless-http");
const app = express();

// const userRouter = require("./routes/user");

// express.Router().get("/login1", async (req, res) => {
// 	console.log("login");
// });

const router = express.Router();
router.get("/hello", (req, res) => {
	res.send({ express: "Hello From Express" });
});

app.use("/.netlify/functions/api", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

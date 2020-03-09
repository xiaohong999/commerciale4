const router = require("express").Router();
const nodemailer = require("nodemailer");
const faunadb = require("faunadb"),
	q = faunadb.query;
const client = new faunadb.Client({
	secret: "fnADmaxpUnACAb1E0e9CbnSbBu-PJ8h0ZI6vEYQz"
});

function sendMailer(toEmail, url, verifyCode) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "yangtingclever@gmail.com",
			pass: "dkrsusuvkrdhdksu529"
		}
	});
	const mailOption = {
		from: "yangtingclever@gmail.com",
		to: toEmail,
		subject: "Account Verification",
		html: `<h1>Hello Friend Please Click on this link<h1><br><hr><p>
          HELLO I AM THE CODERANK I MAKE THIS TUTORIAL FOR MY SUBSCRIBERS AND OUR FRIENDS.</p>
          <br><a href="http://localhost:3000/resetpwd?${url}=${verifyCode}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`
	};
	transporter.sendMail(mailOption, (error, info) => {
		if (error) {
			return false;
		} else {
			return;
		}
	});
}

// login route
router.route("/login").post((req, res) => {
	let email = req.body.email;
	let pwd = req.body.password;
	let active = "1";

	client
		.query(
			q.Paginate(
				q.Match(q.Index("findUserByEmailAndPassAndActive"), email, pwd, active)
			)
		)
		.then(ret => {
			res.send(ret.data[0].id);
		})
		.catch(err => {
			res.send("DB error");
			console.log(err, "DB fail!");
		});
});

// register route
router.route("/register").post((req, res) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "yangtingclever@gmail.com",
			pass: "dkrsusuvkrdhdksu529"
		}
	});
	const verify = Math.floor(Math.random() * 10000000 + 1);
	const active = "0";
	const mailOption = {
		from: "yangtingclever@gmail.com",
		to: `${req.body.email}`,
		subject: "Account Verification",
		html: `<h1>Hello Friend Please Click on this link<h1><br><hr>
          <p> HELLO I AM THE CODERANK I MAKE THIS TUTORIAL FOR MY SUBSCRIBERS AND OUR FRIENDS.</p>
          <br><a href="http://localhost:3000/verification?code=${verify}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`
	};
	client
		.query(
			q.Create(q.Collection("User"), {
				data: {
					email: req.body.email,
					password: req.body.password,
					officalName: req.body.officalName,
					city: req.body.city,
					vatNumber: req.body.vatNumber,
					atecoCode: req.body.atecoCode,
					pec: req.body.pec,
					active: active,
					verify: verify
				}
			})
		)
		.then(ret =>
			transporter.sendMail(mailOption, (error, info) => {
				if (error) {
					console.log(error, "message fail!");
				} else {
					let userdata = {
						email: `${req.body.email}`,
						id: ret.id
					};
					res.cookie("UserInfo", userdata);
					res.send(ret.ref.id);
				}
			})
		)
		.catch(err => {
			res.send("DB error");
			console.log(err, "DB fail!");
		});
});

// verifcation route
router.route("/verification").get((req, res) => {
	console.log(req.query.verify);
	client
		.query(q.Get(q.Ref(q.Collection("user"), req.cookies.UserInfo.id)))
		.then(ret => {
			activateAccount(ret.data.verification);
		})
		.catch(err => {
			console.log("DB failed");
		});
	function activateAccount(verification) {
		if (verification === req.query.verify) {
			client
				.query(
					q.Update(q.Ref(q.Collection("user"), req.cookies.UserInfo.id), {
						data: { active: 1 }
					})
				)
				.then(ret => console.log(ret));
		} else {
			res.send("verification failed");
		}
	}
});

// forgetpassword route
router.route("/forgetpwd").post((req, res) => {
	let active = "1";
	client
		.query(
			q.Paginate(
				q.Match(q.Index("findUserByEmailAndActive"), req.body.email, active)
			)
		)
		.then(ret => {
			res.send(ret.data[0].id);
			sendMailer(req.body.email, "_id", ret.data[0].id);
		})
		.catch(err => {
			res.send("failed");
		});
});

router.route("/resetpwd").post((req, res) => {
	client
		.query(
			q.Update(q.Ref(q.Collection("User"), req.body.userId), {
				data: { password: req.body.password }
			})
		)
		.then(ret => {
			res.send(ret);
			console.log(ret);
		});
});

module.exports = router;

const app = require("express")();
require("dotenv").config();
const middleware = require("./middleware");

app.set("view engine", "pug");
app.set("views", "views");

const server = app.listen(process.env.PORT, () => {
	console.log(`server is up on port ${process.env.PORT}`);
});

app.get("/", middleware.requireLogin, (req, res, next) => {
	var payload = {
		pageTitle: "Home",
	};
	res.status(200).render("home", payload);
});

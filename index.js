const express = require("express");
const hbs = require("./dependencies/engine-config");
const app = express();

/* Import Routes */
const routeHome = require("./routes/routeHome/index");
const routeProducts = require("./routes/routeProducts/index");
const routeLaptops = require("./routes/routeLaptops/index");
const routeCards = require("./routes/routeCards/index");

/* View engine configuration */
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

/* Create static folder */
app.use(express.static("public"));

/* Express uploaded encode */
app.use(express.urlencoded({extended: true}));


/* Routes */
app.get("/", routeHome);

/* App listening */
app.listen(5000, () => console.log("Server is on ..."));
const express_handlebars = require("express-handlebars");

const hbs = express_handlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

module.exports = hbs;
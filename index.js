const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// set up endpoints
router.use("/html", htmlRoutes);
router.use("/api", burgerRoutes);

// ship finished routes to server.js
module.exports = router;

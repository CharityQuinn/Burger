const router = require("express").Router();
// require the file burgerRoutes file to send on information
const burgerRoutes = require("./burgerRoutes");

// set up routes and prefix them
router.use("/burgers", burgerRoutes);

module.exports = router;

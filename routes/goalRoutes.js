const goalRouter = require("express").Router();
const { getAllGoals } = require("../controllers/GoalsControllers");

goalRouter.route("/").get(getAllGoals);

module.exports = { goalRouter };

const goalRouter = require("express").Router();
const { getAllGoalByKraName, deleteAGoalById, postGoal } = require("../controllers/GoalsControllers");

goalRouter.route("/:KraName").get(getAllGoalByKraName);
goalRouter.route("/1/:id").delete(deleteAGoalById);
goalRouter.route("/").post(postGoal);

module.exports = { goalRouter };

const goalRouter = require("express").Router();
const {
  getAllGoalByKraName, deleteAGoalById, postGoal, updateGoalbyId,
} = require("../controllers/GoalsControllers");

goalRouter.route("/:KraName").get(getAllGoalByKraName);
goalRouter.route("/1/:id").delete(deleteAGoalById);
goalRouter.route("/").post(postGoal);
goalRouter.route("/update/:id").patch(updateGoalbyId);

module.exports = { goalRouter };

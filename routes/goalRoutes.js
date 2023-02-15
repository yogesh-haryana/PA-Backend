const goalRouter = require("express").Router();
const {
  getAllGoalByKraNameAndDesig, deleteAGoalById, postGoal,
  updateGoalbyId, deleteGoalsByKraNameAndDesig,
} = require("../controllers/GoalsControllers");

goalRouter.route("/").get(getAllGoalByKraNameAndDesig);
goalRouter.route("/1/:id").delete(deleteAGoalById);
goalRouter.route("/").post(postGoal);
goalRouter.route("/update/:id").patch(updateGoalbyId);
goalRouter.route("/").delete(deleteGoalsByKraNameAndDesig);

module.exports = { goalRouter };

const { GoalModel } = require("../goalModel");

const getAllGoals = async (req, resp) => {
  const data = await GoalModel.find({});
  resp.status(200).json(data);
};

module.exports = { getAllGoals };

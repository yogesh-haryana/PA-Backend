/* eslint-disable no-underscore-dangle */
const { GoalModel } = require("../goalModel");

const getAllGoalByKraName = async (req, resp) => {
  const query = req.params.KraName;
  const data = await GoalModel.find({ KraName: query });
  resp.status(200).json(data);
};

const deleteAGoalById = async (req, resp) => {
  const _id = req.params.id;
  await GoalModel.findByIdAndDelete({ _id });
  resp.send({
    message: "Goal deleted SuccessFully",
    status: 200,
  });
};

const postGoal = async (req, resp) => {
  const data = req.body;
  const respToSend = new GoalModel(data);
  await respToSend.save();
  resp.send({
    message: "Goal Posted Successfully",
    status: 200,
  });
};

const updateGoalbyId = async (req, resp) => {
  const { id } = req.params;
  const data = req.body;
  await GoalModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  resp.send({
    message: "Goal Update Success",
    status: 200,
  });
};

module.exports = {
  getAllGoalByKraName, deleteAGoalById, postGoal, updateGoalbyId,
};

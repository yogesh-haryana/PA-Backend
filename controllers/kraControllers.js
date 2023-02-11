/* eslint-disable no-plusplus */
const { KRAModel } = require("../KraModels");

const getAllKRAs = async (req, resp) => {
  // const request = req.body;
  // let data;
  // if (request) {
  //   data = await KRAModel.find({ request });
  // } else {
  const data = await KRAModel.find({});
  // }
  resp.status(200).json(data);
};

const getKRAsByDesignation = async (req, resp) => {
  const query = req.params.desig;
  const data = await KRAModel.find({ designation: query });
  resp.status(200).json(data);
};

const addNewKRA = async (req, resp) => {
  const data = new KRAModel(req.body);
  const desig = data.designation;
  const oldKRAs = await KRAModel.find({ designation: desig });
  let totalWeightage = 0;
  for (let i = 0; i < oldKRAs.length; i++) {
    const element = oldKRAs[i];
    totalWeightage += Number(element.weightage);
  }
  const addOnWeighatge = data.weightage;
  totalWeightage += addOnWeighatge;
  if (totalWeightage <= 100) {
    await data.save();
    resp.send({
      response: "Kra posted",
      status: 200,
    });
  } else {
    resp.send({
      response: `KRA not updated due to weightage exceeds by ${totalWeightage - 100}%`,
      status: 422,
    });
  }
};

const deleteKRAbyId = async (req, resp) => {
  // eslint-disable-next-line no-underscore-dangle
  const _id = req.params.id;
  await KRAModel.findByIdAndDelete({ _id });
  resp.send("Delete Success");
};

const updateKraById = async (req, resp) => {
  const { id } = req.params;
  const newData = new KRAModel(req.body);
  const desig = newData.designation;
  const oldKRAs = await KRAModel.find({ designation: desig });
  const oldOne = await KRAModel.find({ _id: id });
  const oldOneWeighatge = Number(oldOne[0].weightage);
  let totalWeightage = 0;
  for (let i = 0; i < oldKRAs.length; i++) {
    const element = oldKRAs[i];
    totalWeightage += Number(element.weightage);
  }
  const addOnWeighatge = Number(newData.weightage);
  totalWeightage = totalWeightage + addOnWeighatge - oldOneWeighatge;
  if (totalWeightage <= 100) {
    await KRAModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    resp.send({
      response: "Kra updated",
      status: 200,
    });
  } else {
    resp.send({
      response: `KRA not updated due to weightage exceeds by ${totalWeightage - 100}%`,
      status: 422,
    });
  }
};

module.exports = {
  getAllKRAs,
  getKRAsByDesignation,
  addNewKRA,
  deleteKRAbyId,
  updateKraById,
};

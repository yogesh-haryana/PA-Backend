const { ObjectId } = require("mongodb");
const { SignUp, VerifiedUsers } = require("../UserModels");

const getUsersSignUps = async (_, resp) => {
  const data = await SignUp.find({});
  resp.status(200).json(data);
};

const setUSersSignUps = async (req, resp) => {
  const { email, empId } = req.body;
  const isEmailExist = await SignUp.find({ email });
  const isEmpIdExist = await SignUp.find({ empId });

  if (isEmailExist.length > 0) {
    resp.status(302).json({
      message: "Email Id already Exist",
    });
  } else if (isEmpIdExist.length > 0) {
    resp.status(302).json({
      message: "EmpId must be unique for every user",
    });
  } else {
    const data = new SignUp(req.body);
    await data.save();
    resp.status(200).send("posted successfully");
  }
};

const setVerifiedUsers = async (req, resp) => {
  const data = new VerifiedUsers(req.body);
  await data.save();
  resp.send("data verified by admin");
};

const deleteVerifiedUserData = async (req, resp) => {
  const { id } = req.params;
  await SignUp.findByIdAndDelete(ObjectId(id));
  resp.status(200);
};

const getUsersForLogin = async (req, resp) => {
  const { username, password } = req.query;
  const loginUser = await VerifiedUsers.find({ email: username, password });
  resp.status(200).json(loginUser);
};

const getVerifiedUsers = async (req, resp) => {
  const { dept } = req.params;
  const specificDeptUsers = await VerifiedUsers.find({ department: dept });
  resp.status(200).json(specificDeptUsers);
};

const updateUsersInfo = async (req, resp) => {
  const { id } = req.params;
  const data = req.body;
  const specificUser = await VerifiedUsers.updateOne({ _id: id }, { $set: data });
  resp.status(200).json(specificUser);
};

module.exports = {
  getUsersSignUps,
  setUSersSignUps,
  setVerifiedUsers,
  deleteVerifiedUserData,
  getUsersForLogin,
  getVerifiedUsers,
  updateUsersInfo,
};

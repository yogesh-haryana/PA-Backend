const { signUp, verifiedUsers } = require("../models");
const ObjectId = require("mongodb").ObjectId;

const getUsersSignUps = async (_, resp) => {
    const data = await signUp.find({});
    resp.status(200).json(data);
}

const setUSersSignUps = async (req, resp) => {
    const { email, empId } = req.body;
    const isEmailExist = await signUp.find({ email: email });
    console.log(isEmailExist);
    const isEmpIdExist = await signUp.find({ empId: empId });
    console.log(isEmpIdExist);

    if (isEmailExist.length > 0) {
        resp.status(302).json({
            message: "Email Id already Exist"
        });
    }
    else if (isEmpIdExist.length > 0) {
        resp.status(302).json({
            message: "EmpId must be unique for every user"
        });
    }
    else {
        const data = new signUp(req.body);
        await data.save();
        resp.status(200).send("posted successfully");
    }
}

const setVerifiedUsers = async (req, resp) => {
    const data = new verifiedUsers(req.body);
    await data.save();
    resp.send("data verified by admin");
}

const deleteVerifiedUserData = async(req, resp) => {
    const id = req.params.id;
    await signUp.findByIdAndDelete(ObjectId(id));
    resp.status(200);
}

const getUsersForLogin = async(req, resp) => {
    const { username, password } = req.query;
    const loginUser = await verifiedUsers.find({ email: username, password: password});
    resp.status(200).json(loginUser);
    console.log(loginUser, "function hits");
}

module.exports = { getUsersSignUps, setUSersSignUps, setVerifiedUsers, deleteVerifiedUserData, getUsersForLogin };
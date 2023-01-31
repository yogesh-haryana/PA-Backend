const { signUp } = require("../models");

const getUsersCredentials = async (_, resp) => {
    const data = await signUp.find({});
    resp.status(200).json(data);
}

const setUSersCredentials = async(req, resp) => {
    const data = new signUp(req.body);
    await data.save();
    resp.send("data posted");
}

module.exports = { getUsersCredentials, setUSersCredentials };
import User from "../models/user-model.js"

export const signup = async (req, res) => {
    try {
      const user = await User.create(req, body);
    } catch (error) {
        res.status(400).send(error);
    }
};
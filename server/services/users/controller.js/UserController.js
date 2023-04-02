const { ObjectId } = require("mongodb");
const { mongoConnect, getDatabase } = require("../config/mongoConnection");
const { hashPassword } = require("../helpers/bycript");
const User = require("../model/user");

module.exports = {
  findAllUser: async (req, res) => {
    try {
      //   const db = getDatabase();
      //   const userCollection = db.collection("users");
      //   const users = await userCollection.find().toArray();

      const users = await User.findAll();

      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  addUser: async (req, res) => {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      const user = await User.createUser({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server error" });
    }
  },

  destroyUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.deleteUser(id);
      res.status(200).json({ message: "User Success Delete" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

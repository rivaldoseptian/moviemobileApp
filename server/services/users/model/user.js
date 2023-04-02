const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");
const { hashPassword } = require("../helpers/bycript");

class User {
  static collection() {
    const db = getDatabase();
    const userCollection = db.collection("users");
    return userCollection;
  }
  static async findAll() {
    const users = await this.collection()
      .find({}, { projection: { password: 0 } })
      .toArray();
    return users;
  }

  static async findOne(id) {
    const user = await this.collection().findOne(
      { _id: new ObjectId(id) },
      { projection: { password: 0 } }
    );
    return user;
  }

  static async createUser({
    username,
    email,
    password,
    role,
    phoneNumber,
    address,
  }) {
    const user = await this.collection().insertOne({
      username,
      email,
      password: hashPassword(password),
      role: "Admin",
      phoneNumber,
      address,
    });
    return user;
  }

  static async deleteUser(id) {
    const user = await this.collection().deleteOne({ _id: new ObjectId(id) });
    return user;
  }
}

module.exports = User;

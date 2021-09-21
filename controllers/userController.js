const { User } = require("../models");
const { decode } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    const { name, email, password } = req.body;
    try {
      const newUser = await User.create({ name, email, password });
      res.status(201).json({
        id: newUser.id,
        email: newUser.email
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
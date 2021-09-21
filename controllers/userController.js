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

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundUser = await User.findOne({ where: { email } });
      if (foundUser) {
        const compare = decode(password, foundUser.password);
        if (compare) {
          const access_token = signToken({
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
          });
          res.status(200).json({ access_token, id: foundUser.id, name: foundUser.name, email: foundUser.email });
        } else {
          throw { name: "Unauthorized" };
        }
      } else {
        throw { name: "Unauthorized" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
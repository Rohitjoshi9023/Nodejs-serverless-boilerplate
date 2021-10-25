const { User } = require("../../Models");

module.exports = class UserController {
  login(req, res) {
    res.send({ status: "200", type: "RXERROR", message: "No user found!!!" });
  }
};

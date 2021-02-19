const UserModel = require("../model/UserModel");

class SessionController {
  async create(req, res) {
    await UserModel.findOne({ email: req.body.email })
      .then((response) => {
        if (response.email  === req.body.email & response.password === req.body.password) return res.status(200).json(response);
        else return res.status(404).json({ error: "Usuário não encontrado" });
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new SessionController();

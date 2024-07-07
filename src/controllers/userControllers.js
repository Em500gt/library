const userServices = require('../services/userServices');

class UserControllers {
  async getUsers(req, res) {
    await userServices.getAllUsers()
      .then((data) => res.send(data))
      .catch((err) => res.send(err.message))
  };

  async createUser(req, res) {
    await userServices.createUser(req.body)
      .then(() => res.send('Пользователь добавлен успешно'))
      .catch((err) => res.send(err.message))
  };

  async getUser(req, res) {
    await userServices.getOneUser(req.params.id)
      .then((data) => res.send(data))
      .catch((err) => res.send(err.message))
  }

  async updateUser(req, res) {
    await userServices.updateUser({ id: req.params.id, body: req.body })
      .then(() => res.send('Пользователь успешно обновлен'))
      .catch((err) => res.send(err.message));
  }

  async deleteUser(req, res) {
    await userServices.deleteUser(req.params.id)
      .then(() => res.send('Пользователь успешно удален'))
      .catch((err) => res.send(err.message));
  }
}

module.exports = new UserControllers();
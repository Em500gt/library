const userServices = require('../services/userServices');
const { validationResult } = require('express-validator');

class UserControllers {
  async getUsers(req, res) {
    await userServices.getAllUsers()
      .then((data) => res.status(302).send(data))
      .catch((err) => res.status(400).send(err.message))
  };

  async createUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await userServices.createUser(req.body)
      res.status(201).json({ message: 'Пользователь добавлен успешно' })
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  async getUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await userServices.getOneUser(req.params.id)
      if (!result) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.status(302).send(result);
    }
    catch (error) {
      res.status(500).json({ message: error.message });

    }
  }

  async updateUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await userServices.updateUser({ id: req.params.id, body: req.body })
      if (result === 0) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.status(202).json({ message: 'Пользователь обновлен успешно' })
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const result = await userServices.deleteUser(req.params.id);
      if (result === 0) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.status(202).json({ message: 'Пользователь удален успешно' })
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserControllers();
const { User } = require('../models/models');

class UserServices {

    async getAllUsers() {
        return await User.findAll();
    }

    async createUser(body) {
        await User.create(body);
    }

    async getOneUser(id) {
        return await User.findByPk(id);
    }

    async updateUser(data) {
        const [rowsAffected] = await User.update(data.body, { where: { id: data.id } });
        return rowsAffected;

    }

    async deleteUser(id) {
        return await User.destroy({ where: { id } });
    }

}

module.exports = new UserServices()
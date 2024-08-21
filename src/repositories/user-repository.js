const { User } = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const resposeFromDB = await User.create(data);
            return resposeFromDB;
        } 
        catch (error) {
            throw error
            console.log('something went wrong in user repo: create');
        }
    }

}

module.exports = UserRepository;
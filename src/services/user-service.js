const { UserRepository} = require('../repositories/index');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(newUserData) {
        try {
            const user = await this.userRepository.create(newUserData);
            return user;
            
        } catch (error) {
            throw error
            console.log('something went wrong in user service: createUser');
        }
    }

}

module.exports = UserService;
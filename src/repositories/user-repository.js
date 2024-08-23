const { User } = require('../models/index');

class UserRepository {

    async createUser(data) {
        try {
            const resposeFromDB = await User.create(data,{
                attributes:['id','name']
            });
            let newUser = resposeFromDB.dataValues;
            return { id:newUser?.id , email:newUser?.email }
        } 
        catch (error) {
            console.log('something went wrong in user repo: create');
            throw error
        }
    }

    async findUserByEmail(email) {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            return user;
            
        } catch (error) {
            console.log('something went wrong in user repo: getByEmail');
            throw error
        }
    }

}

module.exports = UserRepository;
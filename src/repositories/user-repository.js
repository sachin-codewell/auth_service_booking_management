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
                },
                attributes: ['id','email']
            })
            return user;
            
        } catch (error) {
            console.log('something went wrong in user repo: getByEmail');
            throw error
        }
    }

    async findUserById(userid) {
        try {
            const user = await User.findByPk(userid,{
                attributes: ['id','email']
            });
            return user;
            
        } catch (error) {
            console.log('something went wrong in user repo: getById');
            throw error
        }
    }

    async getRoles(user) {
        try {
            const roles = await user.getRoles();
            const roleNames = roles.map(role => role.dataValues.name);
            return roleNames;
        } 
        catch (error) {
            console.log('something went wrong in user repo: getRoles');
            throw error
        }
    }

}

module.exports = UserRepository;
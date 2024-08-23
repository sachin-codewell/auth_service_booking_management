const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { UserRepository} = require('../repositories/index');
const { serverConfig } = require('../config/index')

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(newUserData) {
        try {
            const user = await this.userRepository.createUser(newUserData);
            return user;
            
        } 
        catch (error) {
            console.log('something went wrong in user service: createUser');
            throw error
        }
    }

    async signIn(userCredential) {
        try {
           let user =  await this.userRepository.findUserByEmail(userCredential.email);
           user = user?.dataValues;
           if(user) {
                let checkPassword = this.#validatePassword(userCredential.password, user.password);
                console.log('checkPassword',checkPassword)
                if(checkPassword) {
                    const token = this.#createToken({id:user.id, email:user.email});
                    return token;
                }
                else{
                    console.log('something went wrong in user service: signIn');
                    throw new Error('Invalid password');
                }   
            }
            else{
                console.log('something went wrong in user service: signIn');
                throw new Error('User with this email does not exist');
             }
        }
        catch (error) {
            console.log('something went wrong in user service: createUser');
            throw error
        }

    }

    #validatePassword(plainPassword, encryptedPassword) {
        return bcrypt.compareSync(plainPassword, encryptedPassword);
    }

    #createToken(user) {
        try {
            let token = jwt.sign(user,serverConfig.SECRET,{expiresIn: '2h'})
            return token;
        } 
        catch (error) {
            console.log('something went wrong during createion');
            throw error
        }
    }

    #verifyToken(token) {
        try {
            var user = jwt.verify(token, serverConfig.SECRET);
            return user;
          } 
          catch(err) {
            console.log('something went wrong during createion');
            throw error
          }
    }

}

module.exports = UserService;
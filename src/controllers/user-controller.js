const { UserService } = require('../services/index');

const userService = new UserService();

async function createUser(req,res) {
    try { 
       const newUserData = req.body;
       const user = await userService.createUser(newUserData);
       return res.status(201).json({
        success: true,
        data: user,
        error: {},
        message: "User created successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in user controller: createUser',error);
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "User not created"
        });
    }
}

module.exports = {
    createUser
}

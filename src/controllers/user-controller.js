const { UserService } = require('../services/index');

const userService = new UserService();

async function signUp(req,res) {
    try { 
       const newUserData = req.body;
       const user = await userService.signUp(newUserData);
       return res.status(201).json({
        success: true,
        data: user,
        error: {},
        message: "User created successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in user controller: signUp',error);
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "User not created"
        });
    }
}

async function signIn(req,res) {
    try { 
       const userCredential = req.body;
       const token = await userService.signIn(userCredential);
       return res.status(200).json({
        success: true,
        data: token,
        error: {},
        message: "User logged in"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in user controller: signIn');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "Invalid credential"
        });
    }
}

async function isAuthenticated(req,res) {
    try { 
        const token = req.headers['access-token']
       const authenticatedUser = await userService.isAuthenticated(token);
       return res.status(200).json({
        success: true,
        data: authenticatedUser,
        error: {},
        message: "Authenticated User"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in user controller: isAuthenticated');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "Unauthorised User"
        });
    }
}


module.exports = {
    signUp,
    signIn,
    isAuthenticated
}

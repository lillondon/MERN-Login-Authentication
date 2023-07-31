import asyncHandler from 'express-async-handler'

// @desc Auth user/set token
// route POSt /api/user/auth
//@access Public
const authUser = asyncHandler((req, res) =>{

    res.status(401)
    throw new Error("Something wrong")

    res.status(200).json({
        message: "Auth User"
    })
});

export {
    authUser
};
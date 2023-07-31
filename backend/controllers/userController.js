import asyncHandler from 'express-async-handler'

// @desc Auth user/set token
// route POSt /api/user/auth
//@access Public
const authUser = asyncHandler((req, res) =>{
    res.status(200).json({
        message: "Auth User"
    })
});

// @desc Register new user
// route POST /api/users
//@access Public
const registerUser = asyncHandler((req, res) =>{
    res.status(200).json({
        message: "Register User"
    })
});

// @desc Logout user
// route POST /api/user/logout
//@access Public
const logoutUser = asyncHandler((req, res) =>{
    res.status(200).json({
        message: "Logout User"
    })
});

// @desc Get user profile
// route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler((req, res) =>{
    res.status(200).json({
        message: " User Profile"
    })
});

// @desc Update user profile
// route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler((req, res) =>{
    res.status(200).json({
        message: "Update User"
    })
});
export {
    authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const adminUserName = req.body.username
    const adminPassword = req.body.password
    const admin = Admin.create({
        username : adminUserName,
        password : adminPassword
    })
    res.json({
        message : "Admin create....!"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const adminUserName = req.headers.username
    const adminPassword = req.headers.password

    const token =  await jwt.sign({username: adminUserName},JWT_SECRET)
    if (token) {
        res.json({
            token : token
        })
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try{
        const createCourse = await Course.create({
            course: req.body.course,
            description : req.body.description,
            price : req.body.price,
            Image_link : req.body.Image_link
        })  
        res.json({
            message : "Course created"
        })
        }catch(err){
    
        }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCources = await Course.find()
    res.json(allCources)
});

module.exports = router;
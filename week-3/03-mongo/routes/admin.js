const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { default: mongoose } = require("mongoose");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log("Control is reaching here")

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message : "Admin created..."
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
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
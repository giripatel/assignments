const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password
    const user = await User.create({
        username : username,
        password : password
    })
    
    res.json({
        message : "User created successfully.."
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const purchasingCourse = req.params.courseId

    const course = await User.updateOne({
        purchasedCourses:[{
        _id : purchasingCourse
    }]
    })
    
    res.json({
        message : `Purchase successful with ObjectId ${purchasingCourse}`
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const user = await User.findOne({
        username : username
    })
    const purchasedCourses = Course.find({
        _id : {"$in" : user.purchasedCourses}
    })
});

module.exports = router
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const createUser = User.create({
    username: username,
    password: password,
    // courses : [{
    //     _id : mongoose.Schema.Types.ObjectId,
    //     ref : 'Course'
    // }]
  });

  res.json({
    message: "User created",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCources = await Course.find({});
  res.status("200").json(allCources);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  await User.updateOne({
    courses: {
      _id: req.params.courseId,
    },
  });

  res.json({
    message: "Course purchased .....",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.header.username;
  const user = await User.findOne({
    username: username,
  });
  const courses = await Course.find({
    _id: { $in: user.course },
  });

  res.json({
    courses,
  });
});

module.exports = router;

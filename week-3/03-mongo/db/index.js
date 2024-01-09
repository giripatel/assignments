const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://giridharpatel143:xHWYJO6U42zKatsd@cluster0.fsvzgwu.mongodb.net/course_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
        username : String,
        password : String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course',
        },
      ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    course : String,
    description : String,
    price : Number,
    Image_link : String
},{strict: 'throw'});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
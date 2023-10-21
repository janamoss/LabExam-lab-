const mongoose = require('mongoose');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    Student_ID:String,
    Name: String,
    Year_os: String,
    Email: String
},{timestamps: true})

const students = mongoose.model('students',studentSchema)

module.exports = students
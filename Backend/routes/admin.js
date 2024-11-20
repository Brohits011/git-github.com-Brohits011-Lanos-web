const express = require('express');
const Student = require('../models/student');
const authAdmin = require('../middleware/authadmin'); // Applying authAdmin middleware for admin routes
const router = express.Router();

// Protected admin route for fetching students
router.get('/students',  async (req, res) => {
    try {
        // Fetch all students
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        console.error("Error fetching students:", err);
        res.status(500).json({ message: "Failed to retrieve students. Please try again later." });
    }
});

// Add a new student
router.post('/students',  async (req, res) => {
    const { name, email, age, enrolledCourses = [] } = req.body;

    // Input validation (basic)
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required fields.' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) { // Basic email format validation
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    if (age && isNaN(age)) {
        return res.status(400).json({ message: 'Age must be a valid number.' });
    }

    try {
        // Check if a student with the same email already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists.' });
        }

        const student = new Student({ name, email, age, enrolledCourses });
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        console.error("Error creating student:", err);
        res.status(400).json({ message: "Failed to create student. Please check the provided data." });
    }
});

// Edit a student
router.put('/students/:id',  async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        // Update only the fields provided in the request body
        student.name = req.body.name ?? student.name;
        student.email = req.body.email ?? student.email;
        student.age = req.body.age ?? student.age;
        student.enrolledCourses = req.body.enrolledCourses ?? student.enrolledCourses;

        const updatedStudent = await student.save();
        res.json(updatedStudent);
    } catch (err) {
        console.error("Error updating student:", err);
        res.status(400).json({ message: "Failed to update student. Please check the provided data." });
    }
});

// Delete a student
router.delete('/students/:id',  async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        await student.deleteOne();
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error("Error deleting student:", err);
        res.status(500).json({ message: "Failed to delete student. Please try again later." });
    }
});

module.exports = router;

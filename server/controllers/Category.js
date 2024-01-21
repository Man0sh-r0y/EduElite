const Category = require('../models/Category'); // Import Category model

// Only admin can create a new category
// so in the middileware we will check if the user is admin or not

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    // fetch data from request body
    const { name, description } = req.body; // admin will create the category and instructors will add related courses to it

    // validation for empty fields
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // category entry in DataBase
    await Category.create({
      name,
      description
    });

    // send response
    res.status(200).json({
        success: true,
        message: 'Category created successfully'
    });
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Error occured while creating category',
        error: error.message
    });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    // fetch all categories from database
    const categories = await Category.find({}, {name: true, description: true}); 
    //  It indicates that only the "name" and "description" fields of each document should be included in the result.

    // send response
    res.status(200).json({
        success: true,
        message: 'All Categories fetched successfully',
        categories: categories
    });
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: 'Error occured while fetching categories',
        error: error.message
    });
  }
};
const CourseContentSection = require("../models/CourseContentSection");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {

    try {
        // Fetch data from request body
        const { sectionName, courseId } = req.body;

        // Data validation
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "Please check all the required fields. Some fields are missing."
            });
        }

        // Create course content section
        const newSection = await CourseContentSection.create({ sectionName });

        // Push the newly created section to the courseContent array in Course model
        const courseDetails = await Course.findById(courseId);
        courseDetails.courseContent.push(newSection._id);
        await courseDetails.save();

        // populate the courseContentSection and courseContentSubSection from the Course model
        await courseDetails.populate('courseContentSection').execPopulate();
        await courseDetails.CourseContentSection.populate('courseContentSubSection').execPopulate();
        
        return res.status(200).json({
            success: true,
            message: `Section ${sectionName} created successfully`,
            courseDetails: courseDetails
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: `Unable to create Section ${sectionName}, please try again`,
            error: error.message
        });
    }
}

exports.updateSection = async (req, res) => {

    try {
        // Fetch data from request body
        const { sectionName, sectionId } = req.body;

        // Data validation
        if (!sectionName || !sectionId) {
            return res.status(400).json({
                success: false,
                message: "Please check all the required fields. Some fields are missing."
            });
        }

        // Update the section name
        const sectionDetails = await findById(sectionId);
        const oldSectionName = sectionDetails.sectionName;
        sectionDetails.sectionName = sectionName;
        await sectionDetails.save(); // save the updated section name to the database

        return res.status(200).json({
            success: true,
            message: `Course Content Section name ${oldSectionName} has been changed to ${sectionName} Successfully`
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: `Unable to update the Course Content Section name to the new name ${sectionName}, please try again`,
            error: error.message,
        });
    }
};


exports.deleteSection = async (req, res) => {

    try {
        // Fetch data from request body
        const { sectionId, courseId } = req.params

        const courseContentSection = await CourseContentSection.findById(sectionId);

        if(!courseContentSection){
            return res.status(404).json({
                success: false,
                message: "Course Content Section not found"
            })
        }

        // Delete the section from the courseContent array in Course model
        const courseDetails = await Course.findById(courseId);
        courseDetails.courseContent.pull(sectionId);
        await courseDetails.save();

        // Delete the section from the database
        await CourseContentSection.findByIdAndDelete(sectionId);

        return res.status(200).json({
            success: true,
            message: `Section ${courseContentSection.sectionName} Deleted Successfully`
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to delete Section, please try again",
            error: error.message
        });
    }
}
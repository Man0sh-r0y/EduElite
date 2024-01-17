const CourseContentSubSection = require("../models/CourseContentSubSection");
const CourseContentSection = require("../models/CourseContentSection");
const { uploadMediaToCloudinary } = require("../utils/mediaUploader");

// Create Course Content SubSection
exports.createSubSection = async (req, res) => {

    try {
        // Fecth data from Req body
        const { sectionId, title, timeDuration, description } = req.body;

        // Extract file/video from req.files
        const video = req.files.videoFile;

        // Validation of data
        if (!sectionId || !title || !timeDuration || !description || !video) {
            return res.status(400).json({
                success: false,
                message: "Please check all the required fields. Some fields are missing."
            });
        }

        // Upload the video to cloudinary
        const videoUploadDetails = await uploadMediaToCloudinary(video, process.env.FOLDER_NAME);

        //create a sub-section
        const subSectionDetails = await CourseContentSubSection.create({
            title: title,
            timeDuration: timeDuration,
            description: description,
            videoUrl: videoUploadDetails.secure_url,
        });

        // Update the Course Content Section with this Course Content Sub Section ObjectId
        const courseContentSection = await CourseContentSection.findById(sectionId);
        courseContentSection.subSection.push(subSectionDetails._id);
        await courseContentSection.save();

        // populate the courseContentSection 
        await courseContentSection.populate('subSection').execPopulate();

        return res.status(200).json({
            succcess: true,
            message: `Sub Section "${title}" created successfully in "${courseContentSection.sectionName}" section`,
            courseContentSection: courseContentSection
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error while creating sub-section",
            error: error.message
        })
    }
};

//HW: updateSubSection

//HW:deleteSubSection
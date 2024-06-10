import CourseDB from "../DB/models/AddCourse_model.js";

const AddCourseController = async (req, res) => {
  // console.log(req.body);
  // console.log("hello world ");         

  const {
    imgdownloadURL,
    topic,
    description,
    person,
    linkedin,
    courseContent,
  } = req.body;

  try {
    // console.log(imgdownloadURL,topic,description,person,linkedin,courseContent)

    await CourseDB.create({
      imgurl: imgdownloadURL,
      topic,
      description,
      person,
      linkedin,
      courseContent,
    });
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseController;

import CourseDB from "../DB/models/AddCourse_model.js";


const GetCourses = async (req,res)=>{

    try {
        
        const Courses = await CourseDB.find();
        
        res.send({Courses});


    } catch (error) {
        console.log(error);
    }

    



}

export default GetCourses ;
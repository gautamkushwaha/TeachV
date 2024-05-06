import CourseDB from "../DB/models/AddCourse_model.js"

const GetCourseController = async (req,res)=>{

    const id = req.body.id.id;
    // console.log(id);

    const course = await CourseDB.findOne({_id : id});



    res.send({
        course
    })


}

export default GetCourseController;
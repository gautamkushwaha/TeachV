import User from "../DB/models/user_model.js"

const AddCourseToStudentController = async (req,res) => {
 
// console.log(req.body);
const {CourseId , username} = req.body;
// console.log(CourseId, username);
const user = await User.findOne({username});
// console.log(user);

try {
    console.log("Course added to user data ");
    const res = await user.updateOne({$addToSet:{courses : CourseId}});
    console.log(res);
    console.log("Course update complete"); 
   
         
} catch (error) {
    
    console.log(error);
}


}

export default AddCourseToStudentController
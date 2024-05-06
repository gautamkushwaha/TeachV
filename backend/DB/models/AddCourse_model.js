import mongoose from "mongoose";

const addcourseSchema = new mongoose.Schema({

    imgurl : {
        type : String,
        required: true
    },

    topic : {
        type : String,
        required: true
    },

    description : {
        type : String,
        required: true
    },
    
    
    person : {
        type : String,
        required: true
    },

    
    linkedin : {
        type : String,
        required: true
    },

    
    courseContent : {
        type : Array,
        required: true
    },

});

const CourseDB =  mongoose.model("Course",addcourseSchema);

export default CourseDB ; 



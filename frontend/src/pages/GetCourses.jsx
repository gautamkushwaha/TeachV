import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
// import React from 'react'

const GetCourses =  () => {

  const navigate = useNavigate();
  const [Courses,SetCourses] = useState([]);

const getCourses = async ()=>{
  

  const res = await axios.get("/api/courses");
  const NewData = res.data.Courses;
  // console.log(NewData.Courses);
  SetCourses(NewData)
  
}

useEffect(()=>{
  getCourses();
},[])

  return ( 
    <>
    
   
    {
      Courses.map((ele)=>{
        return(

          <div key={ele._id}>

<Link to={`/Courses/${ele._id}`}>
         <img src={ele.imgurl} alt="" />
  </Link>
         
         <h3>{ele.topic}</h3>
         <h3>{ele.description}</h3>
         <h3>{ele.person}</h3>
         <h3>{ele.linkedin}</h3>
         <h3>{ele.courseContent}</h3>

        </div>
        )
      })
    }
    
    
    </>
  )
}

export default GetCourses;
import axios from 'axios'
import { useEffect, useState } from 'react'
// import React from 'react'

const GetCourses =  () => {

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

         <img src={ele.imgurl} alt="" />
         
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
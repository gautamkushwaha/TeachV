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
        return (
          <div key={ele._id}>
            <div className="h-[675px] w-full">
              <div className='h-11/12 w-11/12 p-[4px]'>
                <Link to={`/Courses/${ele._id}`}>
                  <img
                    src='/Home/about.png'
                    // src={ele.imgurl}
                    alt=""
                    className="h-[646px] w-[646px]"
                  />
                </Link>
                <h1>Hello World</h1>
              </div>
              <div>
                <h3>{ele.topic}</h3>
                <h3>{ele.description}</h3>
                <h3>{ele.person}</h3>
                <h3>{ele.linkedin}</h3>
              </div>
            </div>


            <h3>{ele.courseContent}</h3>
          </div>
        );

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
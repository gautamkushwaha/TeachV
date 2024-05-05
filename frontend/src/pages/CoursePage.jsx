import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

const CoursePage =  () => {

    const id = useParams();
    useEffect( ()=>{

       

        getData();

    },[]);

    const getData = async()=>{
        const res = await axios.post("/api/GetCourseById",{
            id
           });

           console.log(res);
    }


  return (

    <>
        <h1>courser page</h1>
    </>




  )
}

export default CoursePage
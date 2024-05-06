import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";


const CoursePage = () => {
  const [Coursedata, SetCourseData] = useState();




  const id = useParams();
  useEffect(() => {
    getData();
    
  }, []);

  console.log(Coursedata);


  const getData = async () => {
    const res = await axios.post("/api/GetCourseById", {
      id,
    });

    SetCourseData(res.data.course);

    //  console.log(res.data.course);  
  };




  return (
    <>
    <div>




      <h1>{Coursedata?.topic}</h1>

    <p>{Coursedata?.description}</p>
    <h3>{Coursedata?.person}</h3>
    <h3>{Coursedata?.linkedin}</h3>

    <div>

    <h2>This Course includes</h2>
    </div>

    <button>Join now for Free</button>

    {

        Coursedata?.courseContent?.map((ele)=>{
              return (
                <div key={ele} >

                    <h2>{ele}</h2>

                </div>
              )
        })

    }

    </div>
    </>
  );
};

export default CoursePage;

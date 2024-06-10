import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

const CoursePage = () => {
  const [Coursedata, SetCourseData] = useState();

  const navigate = useNavigate();
  const { username,isLogged } = useSelector((state)=>state.user);

  const id = useParams();

  useEffect(() => {
    getData();
  }, []);

  const handelJoinButton = ()=>{
    if(isLogged){
     axios.post("/api/addcoursetostudent",{
        
        username,
        CourseId : id, 
      }) 
    }
    else{
      navigate("/signin")
    }
  }

  const getData = async () => {
    const res = await axios.post("/api/GetCourseById", {
      id,
    });

    SetCourseData(res.data.course);

    // console.log(res);
  };

  return (
    <>
      <div>
        <h1>{Coursedata?.topic}</h1>
        <img src={Coursedata?.imgurl} alt="" />
        <p>{Coursedata?.description}</p>
        <h3>{Coursedata?.person}</h3>
        <h3>{Coursedata?.linkedin}</h3>
        <div>
          <h2>This Course includes</h2>
        </div>

        <button  onClick={handelJoinButton}>Join now for Free</button>

        {Coursedata?.courseContent?.map((ele) => {
          return (
            <div key={ele}>
              <h2>{ele}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoursePage;

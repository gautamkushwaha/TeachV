import { useEffect, useState } from "react";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../helper/firebase";
import axios from "axios";

const AddCourse = () => {
  const [image, setImage] = useState(undefined);
  const [imgdownloadURL,SetimgdownloadURL] = useState();
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [courseContent, setCourseContent] = useState([]);

  const handleImageChange = (e) => {
    // setImage(URL.createObjectURL(e.target.files[0]));

    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, send data to backend 

    // console.log({
    //   image,
    //   topic,
    //   description,
    //   person,
    //   linkedin,
    //   courseContent,
    // });

     uploadFile(image);

  };

  useEffect(()=>{
    if(imgdownloadURL){
      sendData();
    }
  },[imgdownloadURL])

  const sendData = async ()=>{

   
    axios.post("/api/addcourse",{
      imgdownloadURL,topic,description,person,linkedin,courseContent
    });
      

  }

  
 



  const uploadFile = async (file) => {
    const storage = getStorage(app);
    const folder = "CourseImg/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
        (snapshot) => {
          // const progress =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // fileType === "imgUrl"
          //   ? setImgPerc(Math.round(progress))
          //   : setVideoPerc(Math.round(progress));
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },

      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log("harsha");
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);
          SetimgdownloadURL(downloadURL);     
        });
      }
    );
  };

  const handleInputChange = (e) => {
    setCourseContent(e.target.value.split(',').map(str => str.trim()));
    // console.log(courseContent);
  };

  





  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Course Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold">
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
          {image && (
            <img src={image} alt="Course" className="mt-2 rounded-md w-full" />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="topic" className="block font-semibold">
            Topic:
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="person" className="block font-semibold">
            Person:
          </label>
          <input
            type="text"
            id="person"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="linkedin" className="block font-semibold">
            LinkedIn:
          </label>
          <input
            type="text"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courseContent" className="block font-semibold">
            Course Content:
          </label>
          <textarea
            id="courseContent"
            // value={courseContent}
            // onChange={(e) => {setCourseContent(e.target.value.split("\n")) ,console.log(courseContent); }}
            value={courseContent.join(',')} onChange={handleInputChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourse;

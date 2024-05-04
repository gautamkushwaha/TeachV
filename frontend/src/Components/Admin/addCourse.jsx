import React, { useState } from "react";

const AddCourse = () => {
  const [image, setImage] = useState(null);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [courseContent, setCourseContent] = useState([]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      image,
      topic,
      description,
      person,
      linkedin,
      courseContent,
    });
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
            value={courseContent}
            onChange={(e) => setCourseContent(e.target.value.split("\n"))}
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

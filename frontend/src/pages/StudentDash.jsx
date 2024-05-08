import { useSelector } from "react-redux";



const StudentDash = () => {

  const {isLogged} = useSelector((state)=>state.user)

  console.log(isLogged);

  return <div>StudentDash</div>;
};
export default StudentDash;

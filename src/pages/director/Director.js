import Navbar from "../../components/navbar/Navbar";
import LoginForm from "../../components/directorForm/LoginForm";

function Director() {
  return (
    <div>
      <Navbar backgroundColor={true} borderBottom={true} />
      <LoginForm />
    </div>
  );
}
export default Director;

import FaqForm from "../../components/faqForm/FaqForm";
import Navbar from "../../components/navbar/Navbar";

function Faq() {
  return (
    <div>
      <Navbar backgroundColor={true} borderBottom={true} />
      <FaqForm />
    </div>
  );
}
export default Faq;

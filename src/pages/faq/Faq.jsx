import FaqAccordion from "../../components/faqAccordion/FaqAccordion";
import Navbar from "../../components/navbar/Navbar";
import { Title, FAQContainer } from "./FaqStyles";

const Faq = () => {
  return (
    <FAQContainer>
      <Navbar backgroundColor={true} borderBottom={true} />
      <Title>FAQ</Title>
      <FaqAccordion />
    </FAQContainer>
  );
};
export default Faq;

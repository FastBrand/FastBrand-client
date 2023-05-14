import FaqAccordion from "../../components/faqAccordion/FaqAccordion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Title, FAQContainer } from "./FaqStyles";

const Faq = () => {
  return (
    <>
      <FAQContainer sx={{ pb: 50 }}>
        <Navbar backgroundColor={true} borderBottom={true} />
        <Title>FAQ</Title>
        <FaqAccordion />
      </FAQContainer>
      <Footer />
    </>
  );
};
export default Faq;

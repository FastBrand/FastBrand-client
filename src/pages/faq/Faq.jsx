import FaqAccordion from "../../components/faqAccordion/FaqAccordion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Title, FAQContainer } from "./FaqStyles";
import { Fade } from "@mui/material";

const Faq = () => {
  return (
    <>
      <FAQContainer>
        <Navbar backgroundColor="white" />
        <Fade timeout={1000} in={true} mountOnEnter unmountOnExit>
          <Title>자주하는질문</Title>
        </Fade>
        <FaqAccordion />
      </FAQContainer>
      <Footer />
    </>
  );
};
export default Faq;

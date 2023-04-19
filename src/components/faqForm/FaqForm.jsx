import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../navbar/Navbar";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import "./FaqForm.css";
import Footer from "../footer/Footer";
import axios from "axios";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  margin: "auto",
  width: "70%",
  marginBottom: theme.spacing(15),

  ".Mui-expanded": {
    margin: "auto",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  marginBottom: theme.spacing(2),
  minHeight: 64,

  "& .Mui-expanded": {
    minHeight: 64,
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: "#000",
  fontSize: "1.5rem",
  marginRight: theme.spacing(1),
  transition: "transform 0.3s ease-in-out",
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  padding: theme.spacing(2),
}));

const StyledQuestion = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.2rem",
  fontFamily: "Pretendard",
}));

const StyledAnswer = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontFamily: "Pretendard",
}));

const FaqForm = () => {
  const [expanded, setExpanded] = useState(false);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/faq")
      .then((response) => {
        setFaqData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq">
      <StyledAccordion expanded={expanded} onChange={handleChange}>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="faqTitle">FAQ</div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <StyledAccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <StyledQuestion variant="h6">Q. {faq.title}</StyledQuestion>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledAnswer>&nbsp;&nbsp;&nbsp;{faq.content}</StyledAnswer>
            </StyledAccordionDetails>
          </div>
        ))}
      </StyledAccordion>
      <Footer />
    </div>
  );
};

export default FaqForm;

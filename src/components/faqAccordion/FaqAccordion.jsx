import React, { useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Title, Content } from "./FAqAccordionStyles";

const FaqAccordion = () => {
  const [faqData, setFaqData] = React.useState([]);

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

  return (
    <div>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Title>Q. {faq.title}</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Content>{faq.content}</Content>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqAccordion;

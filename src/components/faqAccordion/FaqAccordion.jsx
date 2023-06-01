import React, { useEffect } from "react";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Title, Content, AccordionContainer } from "./FAqAccordionStyles";

const FaqAccordion = () => {
  const [faqData, setFaqData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://43.202.29.2:8080/api/faq")
      .then((response) => {
        const formattedData = response.data.map((faq) => ({
          ...faq,
          content: faq.content.replace(/\\r\\n/g, "\r\n"),
          title: faq.title.replace(/\\r\\n/g, "\r\n"),
        }));
        setFaqData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AccordionContainer>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Title>
              <span style={{ color: "#CBA585" }}>Q. </span>
              {faq.title}
            </Title>
          </AccordionSummary>
          <AccordionDetails>
            <Content style={{ whiteSpace: "pre-line" }}>{faq.content}</Content>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionContainer>
  );
};

export default FaqAccordion;

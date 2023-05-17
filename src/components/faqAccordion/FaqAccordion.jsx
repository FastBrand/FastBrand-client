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
    <div>
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
    </div>
  );
};

export default FaqAccordion;

import Navbar from "../../components/navbar/Navbar";
import MarkSelectForm from "../../components/markSelectForm/MarkSelectForm";
import NationSelectForm from "../../components/nationSelectForm/NationSelectForm";
import TrademarkForm from "../../components/trademarkForm/TrademarkForm";
import ClassificationForm from "../../components/classificationForm/ClassificationForm";
import ApplicantForm from "../../components/applicantForm/ApplicantForm";
import "./DomesticMark.css";
import ManagerForm from "../../components/managerForm/ManagerForm";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

function DomesticMark() {

  return (
    <div className="markPage">
      <Navbar backgroundColor="rgb(255 255 255 / 0.8)" borderBottom={true} />
      <MarkSelectForm />
      <TrademarkForm />
      <ClassificationForm />
      <ManagerForm />
      <NationSelectForm />
      <ApplicantForm />
      
      
      <div><Button
        style={{width:'300px', backgroundColor:'#3E3E3F', color:'white'}}
        variant="contained"
        //onClick={handleSubmit}               
        >신청하기    
      </Button></div>
      
    </div>
  );
}
export default DomesticMark;

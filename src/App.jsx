import "./App.scss";
import Main from "./pages/main/Main";
import Price from "./pages/price/Price";
import DomesticMark from "./pages/domesticMark/DomesticMark";
import Faq from "./pages/faq/Faq";
import Director from "./pages/director/Director";
import DashBoard from "./admin/pages/main/DashBoard";
import FaqBoard from "./admin/pages/main/FaqBoard";
import MarkBoard from "./admin/pages/main/MarkBoard";
import CompanyInfoForm from "./components/companyInfoForm/CompanyInfoForm";
import Step from "./pages/step/Step";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
        <Route path="/step" element={<Step />} />
        <Route path="/domesticmark" element={<DomesticMark />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/director" element={<Director />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/faqBoard" element={<FaqBoard />} />
        <Route path="/markBoard" element={<MarkBoard />} />
        <Route path="/companyinfo" element={<CompanyInfoForm />} />
      </Routes>
    </div>
  );
}

export default App;

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
import MarkDetail from "./admin/pages/main/MarkDetail";
import Step from "./pages/step/Step";
import CompanyPoint from "./pages/companyPoint/CompanyPoint";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";

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
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/faqBoard" element={<FaqBoard/>} />
        <Route path="/markBoard" element={<MarkBoard/>} />
        <Route path="/companyinfo" element={<CompanyInfoForm/> } />
        <Route path="/companypoint" element={<CompanyPoint/> } />
        <Route path="/markinfo/:id" element={<MarkDetail/>} />
        <Route path="/login" element={<LoginForm /> } />
      </Routes>
    </div>
  );
}

export default App;

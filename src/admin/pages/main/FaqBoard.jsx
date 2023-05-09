import FaqTable from "../../compoents/faqTable/FaqTable";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"

function FaqBoard(){
    return(
    <div>
    <SideNavbarForm/>
    <div className="faqboard" style={{ marginTop:'120px',marginLeft:'400px'}}>
    <FaqTable/>
    </div>
    </div>
    );
}
export default FaqBoard;
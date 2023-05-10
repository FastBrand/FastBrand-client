import MarkInfo from "../../compoents/MarkInfo/MarkInfo";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"

function MarkBoard(){
    return(
    <div>
    <SideNavbarForm/>
    <div className="markboard" style={{ marginTop:'120px',marginLeft:'400px'}}>
    <MarkInfo/>
    </div>
    </div>
    );
}
export default MarkBoard;
import MarkInfo from "../../compoents/MarkInfo/MarkInfo";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"

function MarkBoard(){
    return(
    <div>
    <SideNavbarForm/>
    <div className="markboard" style={{ marginTop:'100px',marginLeft:'350px'}}>
    <MarkInfo/>
    </div>
    </div>
    );
}
export default MarkBoard;
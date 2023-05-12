import MarkDetails from "../../compoents/MarkInfo/MarkDetails";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"

function MarkDetail(){
    return(
    <div>
    <SideNavbarForm/>
    <div className="markdetail" style={{ marginTop:'120px',marginLeft:'400px'}}>
    <MarkDetails/>
    </div>
    </div>
    );
}
export default MarkDetail;
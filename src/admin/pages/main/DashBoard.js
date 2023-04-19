import DashboardForm from "../../compoents/dashboardForm/DashboardForm";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"
import './Dashboard.css'

function DashBoard(){
    return(
    <div>
    <SideNavbarForm/>
    <div className="dashboard" style={{marginTop:'202px', marginLeft:'202px'}}>
    <DashboardForm/>
    </div>
    </div>
    );
}
export default DashBoard;
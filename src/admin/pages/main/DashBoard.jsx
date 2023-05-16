import DashboardForm from "../../compoents/dashboardForm/DashboardForm";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm"

function DashBoard(){
    return(
    <div style={{backgroundColor: '#e2e2e2'}}>
    <SideNavbarForm/>
    <div className="dashboard" style={{ marginTop:'90px',marginLeft:'202px'}}>
    <DashboardForm/>
    </div>
    </div>
    );
}
export default DashBoard;
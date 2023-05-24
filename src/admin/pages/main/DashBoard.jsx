import DashboardForm from "../../compoents/dashboardForm/DashboardForm";
import SideNavbarForm from "../../compoents/sideNavbarForm/SideNavbarForm";

function DashBoard() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <SideNavbarForm />
      <div
        className="dashboard"
        style={{
          height: "120vh",
          marginLeft: "202px",
        }}
      >
     
        <DashboardForm />
    
      </div>
    </div>
  );
}
export default DashBoard;

import DashboardLayout from "./components/DashboardLayout";
import FooterLayout from "./components/FooterLayout";
import HeaderLayout from "./components/HeaderLayout";
import MenuLayout from "./components/MenuLayout";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderLayout />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 alert alert-danger containerMenu">
            <MenuLayout />
          </div>
          <div className="col-8 alert alert-primary">
            <DashboardLayout />
          </div>
        </div>
      </div>
      <div className="containerFooter">
        <FooterLayout />
      </div>
    </div>
  );
}

export default App;

import DashboardLayout from "./components/DashboardLayout";
import FooterLayout from "./components/FooterLayout";
import HeaderLayout from "./components/HeaderLayout";
import MenuLayout from "./components/MenuLayout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderLayout />
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-4 alert alert-danger containerMenu position-relative">
              <MenuLayout />
            </div>
            <div className="col-8 alert alert-primary containerDashboar">
              <DashboardLayout />
            </div>
          </div>
        </div>
        <div className="containerFooter">
          <FooterLayout />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

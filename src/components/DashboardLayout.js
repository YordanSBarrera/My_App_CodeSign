import Route from "./Route";
import Borrar from "./Vistas/Borrar";
import Palindrome from "./Vistas/Palindrome";
import AdjacentElementsProduct from "./Vistas/AdjacentElementsProduct";
import TwoSum from "./Vistas/TwoSum";
import CenturyFromYear from "./Vistas/CenturyFromYear";

const DashboardLayout = () => {
  return (
    <div>
      <Route path="/">
        <h1 className="text-danger">Test Site.</h1>
        Dolore cupidatat reprehenderit non deserunt do officia exercitation.
        Culpa minim ea aute qui voluptate quis et deserunt eu. Et id in elit
        ipsum esse.
      </Route>
      <Route path="/borrar">
        <Borrar />
      </Route>
      <Route path="/Palimdrome">
        <Palindrome />
      </Route>
      <Route path="/AdjacentElementsProduct">
        <AdjacentElementsProduct />
      </Route>
      <Route path="/TwoSum">
        <TwoSum />
      </Route>
      <Route path="/CenturyFromYear">
        <CenturyFromYear />
      </Route>
    </div>
  );
};

export default DashboardLayout;

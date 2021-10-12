import Route from "./Route";
import Borrar from "./codeSignal/Borrar";
import Palindrome from "./codeSignal/Palindrome";

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
    </div>
  );
};

export default DashboardLayout;

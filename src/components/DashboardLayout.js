import Route from "./Route";
import Borrar from "./Vistas/Borrar";

import Palindrome from "./Vistas/TheJourneyBegins/Palindrome";
import CenturyFromYear from "./Vistas/TheJourneyBegins/CenturyFromYear";
import TwoSum from "./Vistas/TheJourneyBegins/TwoSum";

import AdjacentElementsProduct from "./Vistas/EdgeOfTheOcean/AdjacentElementsProduct";
import ShareArea from "./Vistas/EdgeOfTheOcean/ShareArea";
import MakeArrayConsecutive2 from "./Vistas/EdgeOfTheOcean/MakeArrayConsecutive2";
import AlmostIncreasingSequense from "./Vistas/EdgeOfTheOcean/AlmostIncreasingSequense";
import MatrixElementsSum from "./Vistas/EdgeOfTheOcean/MatrixElementsSum";

import AllLongestStrings from "./Vistas/SmoothSailing/AllLongestStrings";
import CommonCharacterCount from "./Vistas/SmoothSailing/CommonCharacterCount";
import IsLucky from "./Vistas/SmoothSailing/IsLucky";
import SortByHeight from "./Vistas/SmoothSailing/SortByHeight";
import ReverseInParentheses from "./Vistas/SmoothSailing/ReverseInParentheses";

import AlternatingSums from "./Vistas/ExploringTheWaters/AlternatingSums";
import AddBorder from "./Vistas/ExploringTheWaters/AddBorder";
import AreSimilar from "./Vistas/ExploringTheWaters/AreSimilar";
import ArrayChange from "./Vistas/ExploringTheWaters/ArrayChange";
import PalindromeRearranging from "./Vistas/ExploringTheWaters/PalindromeRearranging";

const DashboardLayout = () => {
  return (
    <div>
      <Route path="/borrar">
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
      <Route path="/ShareArea">
        <ShareArea />
      </Route>
      <Route path="/MakeArrayConsecutive2">
        <MakeArrayConsecutive2 />
      </Route>
      <Route path="/AlmostIncreasingSequense">
        <AlmostIncreasingSequense />
      </Route>
      <Route path="/MatrixElementsSum">
        <MatrixElementsSum />
      </Route>

      {/** Parte #3 Smoot Sailing  incio**/}
      <Route path="/AllLongestStrings">
        <AllLongestStrings />
      </Route>
      <Route path="/CommonCharacterCount">
        <CommonCharacterCount />
      </Route>
      <Route path="/IsLucky">
        <IsLucky />
      </Route>
      <Route path="/SortByHeight">
        <SortByHeight />
      </Route>
      <Route path="/ReverseInParentheses">
        <ReverseInParentheses />
      </Route>
      {/**end */}

      {/** Parte #4 ExploringTheWaters  incio**/}
      <Route path="/AlternatingSums">
        <AlternatingSums />
      </Route>
      <Route path="/AddBorder">
        <AddBorder />
      </Route>
      <Route path="/AreSimilar">
        <AreSimilar />
      </Route>
      <Route path="/ArrayChange">
        <ArrayChange />
      </Route>
      <Route path="/PalindromeRearranging">
        <PalindromeRearranging />
      </Route>
      {/**end */}
    </div>
  );
};

export default DashboardLayout;

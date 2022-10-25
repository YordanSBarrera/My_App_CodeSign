//import Route from "./Route";
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

import P1E1 from "./Vistas/Extras/P1E1";
import P1E2 from "./Vistas/Extras/P1E2";
import P1E3 from "./Vistas/Extras/P1E3";
import P1E4 from "./Vistas/Extras/P1E4";
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from "./inicio";

const DashboardLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/borrar" exact>
          <Borrar />
        </Route>
        <Route path="/FirstDuplicate" exact>
          <Borrar />
        </Route>
        {/** Parte #1 The Journey Begins  incio**/}
        <Route path="/TwoSum" exact>
          <TwoSum />
        </Route>
        <Route path="/Palimdrome" exact>
          <Palindrome />
        </Route>
        <Route path="/CenturyFromYear" exact>
          <CenturyFromYear />
        </Route>
        {/**end */}
        {/** Parte #2 Edge of the Ocean  incio**/}
        <Route path="/ShareArea" exact>
          <ShareArea />
        </Route>
        <Route path="/AdjacentElementsProduct" exact>
          <AdjacentElementsProduct />
        </Route>
        <Route path="/MakeArrayConsecutive2" exact>
          <MakeArrayConsecutive2 />
        </Route>
        <Route path="/AlmostIncreasingSequense" exact>
          <AlmostIncreasingSequense />
        </Route>
        <Route path="/MatrixElementsSum" exact>
          <MatrixElementsSum />
        </Route>
        {/**end */}
        {/** Parte #3 Smoot Sailing  incio**/}
        <Route path="/AllLongestStrings" exact>
          <AllLongestStrings />
        </Route>
        <Route path="/CommonCharacterCount" exact>
          <CommonCharacterCount />
        </Route>
        <Route path="/IsLucky" exact>
          <IsLucky />
        </Route>
        <Route path="/SortByHeight" exact>
          <SortByHeight />
        </Route>
        <Route path="/ReverseInParentheses" exact>
          <ReverseInParentheses />
        </Route>
        {/**end */}
        {/** Parte #4 ExploringTheWaters  incio**/}
        <Route path="/AlternatingSums" exact>
          <AlternatingSums />
        </Route>
        <Route path="/AddBorder" exact>
          <AddBorder />
        </Route>
        <Route path="/AreSimilar" exact>
          <AreSimilar />
        </Route>
        <Route path="/ArrayChange" exact>
          <ArrayChange />
        </Route>
        <Route path="/PalindromeRearranging" exact>
          <PalindromeRearranging />
        </Route>
        {/**end */}
        {/** Parte EXTRA  incio**/}
        <Route path="/Extra/P1E1" exact>
          <P1E1 />
        </Route>
        <Route path="/Extra/P1E2" exact>
          <P1E2 />
        </Route>
        <Route path="/Extra/P1E3" exact>
          <P1E3 />
        </Route>
        <Route path="/Extra/P1E4" exact>
          <P1E4 />
        </Route>
      </BrowserRouter>
      {/**end */}
    </div>
  );
};

export default DashboardLayout;

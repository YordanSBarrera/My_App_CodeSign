//import Link from "./Link";
import "../App";
import Accordion from "./Accordion/Accordion";
import {
  TheJourneryBegins,
  TheEdgenOfTheOcean,
  ExploringTheWaters,
  SmoothSailing,
  Extra,
} from "./MenuData";
//import Borrar from "./Vistas/Borrar";

const MenuLayout = () => {
  return (
    <div className="menuLayout">
      <h3>Menu</h3>
      <Accordion title=" The Journery Begins" contents={TheJourneryBegins()} />
      <Accordion
        title=" The Edgen of the Ocean"
        contents={TheEdgenOfTheOcean()}
      />
      <Accordion title="Smooth Sailing" contents={SmoothSailing()} />
      <Accordion
        title=" Exploring The Waters"
        contents={ExploringTheWaters()}
      />
      <Accordion title=" Extra" contents={Extra()} />
    </div>
  );
};

export default MenuLayout;

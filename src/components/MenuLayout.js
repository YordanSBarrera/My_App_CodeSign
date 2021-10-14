import Link from "./Link";
import "../App";

const MenuLayout = () => {
  /* const Menu = [
    { title: "Introducción", content: "checkPalindrome" },
    { title: "Cap 1", content: "exe 1" },
  ];
*/
  return (
    <div className="menuLayout">
      Menu
      <br />
      <ul>
        <li>
          <Link href="/" className="item">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Palimdrome" className="item">
            checkPalindrome
          </Link>
        </li>
        <li>
          <Link href="/AdjacentElementsProduct" className="item">
            AdjacentElementsProduct
          </Link>
        </li>
        <li>
          <Link href="/borrar" className="item">
            Borrar
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLayout;

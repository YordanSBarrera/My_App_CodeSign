import Link from "./Link";
import "../App";

const MenuLayout = () => {
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
          <h3> The Journery Begins</h3>
          <ul>
            <li>
              <Link href="/TwoSum" className="item">
                Add
              </Link>
            </li>
            <li>
              <Link href="/CenturyFromYear" className="item">
                CenturyFromYear
              </Link>
            </li>
            <li>
              <Link href="/Palimdrome" className="item">
                checkPalindrome
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3>The Edgen of the Ocean</h3>
          <ul>
            <li>
              <Link href="/AdjacentElementsProduct" className="item">
                AdjacentElementsProduct
              </Link>
            </li>
            <li>
              <Link href="/ShareArea" className="item">
                ShareArea
              </Link>
            </li>
            <li>
              <Link href="/MakeArrayConsecutive2" className="item">
                Make Array Consecutive 2
              </Link>
            </li>
            <li>
              <Link href="/AlmostIncreasingSequense" className="item">
                AlmostIncreasingSequense
              </Link>
            </li>
            <li>
              <Link href="/MatrixElementsSum" className="item">
                MatrixElementsSum
              </Link>
            </li>
          </ul>
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

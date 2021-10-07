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
          <Link href="/Palimdrome" className="item">
            checkPalindrome
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

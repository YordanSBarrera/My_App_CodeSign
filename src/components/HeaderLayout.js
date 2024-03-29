//import { Link } from "react-router-dom";
import Link from "./Link";

const HeaderLayout = () => {
  return (
    <header className="d-flex border-bottom mb-2">
      <div className="col-12">
        <Link href='/' className=''>
        <h2 className="text-center ml-5">My CodeSignal</h2>
        </Link>
        <br />
      </div>
    </header>
  );
};

export default HeaderLayout;

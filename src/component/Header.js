import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="d-flex justify-content-space-around align-items-center header">
        <main>
          <h3 className="text-light bg-dark p-2 ">Farthin Restaurent</h3>
        </main>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          {/* <Link className="link" to="/header">
            Header
          </Link> */}
          <Link className="link" to="/restaurent">
            Restaurent
          </Link>
          <Link className="link" to="/meal-details">
            Meal-Details
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

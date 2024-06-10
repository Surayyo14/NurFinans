
import HeaderBottom from "./header-bottom";
import HeaderTop from "./header-top";
import "./index.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <HeaderTop />
        <HeaderBottom />
       
      </div>
    </header>
  );
};

export default Header;

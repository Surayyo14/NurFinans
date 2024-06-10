import navLogo from "../../../assets/images/nav_logo.png";
import "../index.css";

const HeaderBottom = () => {
  return (
    <div className="navbar_bottom_links">
      <div className="navbar_logo">
        <a href="./index.html">
          <img src={navLogo} alt="Navigation Logo" />
        </a>
      </div>
      <div className="navbar_bottom_items">
        <a href="#">Инвестиции</a>
        <a href="#">Рассрочка</a>
        <a href="#">Калькулятор</a>
      </div>
      <div className="navbar_bottom_user">
        <div className="phone">
          <a href="tel:8 800 2700 700">
            {" "}
            <i class="fa-solid fa-phone"></i> <span>8 800 2700 700</span>
          </a>
        </div>
        <div className="search">
          {" "}
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="btn1">
          {" "}
          <button>Личный Кабинет</button>
        </div>
        <div className="btn2">
          {" "}
          <button>Онлайн-заявка</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;










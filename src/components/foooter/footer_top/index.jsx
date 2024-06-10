import "../index.css";
import FooterLogo from "../../../assets/images/footer_logo.png";
const FooterTop = () => {
  return (
    <div className="footer_top">
      <div className="footer_logo">
        <a href="./index.html">
          <img src={FooterLogo} alt="" />
        </a>
        <form action="">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <input placeholder="Поиск по услугам" type="search" />
        </form>
       
      </div>
    </div>
  );
};

export default FooterTop;

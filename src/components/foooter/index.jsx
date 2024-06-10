import FooterBottom from "./footer_bottom";
import FooterCenter from "./footer_center";
import FooterTop from "./footer_top";
import "./index.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <FooterTop />
        </div>
        <div>
          <FooterCenter />
        </div>
        <div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

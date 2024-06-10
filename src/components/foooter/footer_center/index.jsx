import "../index.css";
import FacebookLogo from "../../../assets/images/FacebookLogo.png";
import WhatsappLogo from "../../../assets/images/WhatsappLogo.png";
import TelegramLogo from "../../../assets/images/TelegramLogo.png";
import YoutubeLogo from "../../../assets/images/YoutubeLogo.png";
import InstagramLogo from "../../../assets/images/InstagramLogo.png";
const FooterCenter = () => {
  return (
    <div className="footer_center">
      <div className="footer_user">
        <div className="tel">
          {" "}
          <a href="tel:8 800 2700 700">8 800 2700 700</a>
        </div>
        <div className="email">
          {" "}
          <a href="mailto:support@nur.finance">support@nur.finance</a>
        </div>
        <div className="map">
          <a href="">Казань, ул. Мавлютова, дом 31</a>
        </div>
        <p>Мы работаем с 08:00 до 20:00</p>
        <div className="user_logo">
          <a href="">
            <img src={FacebookLogo} alt="" />
          </a>
          <a href="">
            <img src={WhatsappLogo} alt="" />
          </a>
          <a href="">
            <img src={TelegramLogo} alt="" />
          </a>
          <a href="">
            <img src={YoutubeLogo} alt="" />
          </a>
          <a href="">
            <img src={InstagramLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="footer_center_links">
        <h2>Инвестиции</h2>
        <ul>
          <li>
            <a href="">Вклад Накопительный</a>
          </li>
          <li>
            <a href="">Вклад Активный</a>
          </li>
          <li>
            <a href="">Вклад Комфорт</a>
          </li>
          <li>
            <a href="">Калькулятор</a>
          </li>
          <li>
            <a href="">Отзывы по инвестициям</a>
          </li>
        </ul>
      </div>
      <div className="footer_center_links">
        <h2>Рассрочка</h2>
        <ul>
          <li>
            <a href="">АвтоРассрочка</a>
          </li>
          <li>
            <a href="">Долевое финансирование</a>
          </li>
          <li>
            <a href="">Долговое финансирование</a>
          </li>
          <li>
            <a href="">Калькулятор</a>
          </li>
          <li>
            <a href="">Отзывы по займам</a>
          </li>
        </ul>
      </div>
      <div className="footer_center_links">
        <h2>Компания</h2>
        <ul>
          <li>
            <a href="">О компании</a>
          </li>
          <li>
            <a href="">Новости</a>
          </li>
          <li>
            <a href="">Отчетность</a>
          </li>
          <li>
            <a href="">Сотрудничество</a>
          </li>
          <li>
            <a href="">Реквизиты</a>
          </li>
        </ul>
      </div>
      <div className="footer_center_links">
        <h2>Информация</h2>
        <ul>
          <li>
            <a href="">Халяль подробно</a>
          </li>
          <li>
            <a href="">Наши партнеры</a>
          </li>
          <li>
            <a href="">Частые вопросы</a>
          </li>
          <li>
            <a href="">Личный кабинет</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCenter;





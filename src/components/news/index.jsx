import "./news.css";
import investor1 from "../../assets/images/investor1.png";
import carImg from "../../assets/images/car_img.png";
import machine from "../../assets/images/machine.png";
import businessman from "../../assets/images/businessman.png"
const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news_title">
          <h2>Рекомендуемые продукты</h2>
        </div>
        <div className="news_card_wrapper">
          <div className="news_card1">
            <div className="news_card_title">
              <h5>Инвестиции</h5>
              <h3>Вклад Комфорт</h3>
              <div className="news_wrap">
                <div className="news_wrap1">
                  <h1>17,5%</h1>
                  <h4>Доходность, до</h4>
                </div>
                <div className="news_wrap1">
                <h1>90 дней</h1>
                <h4>Срок вклада, от</h4>
                </div>
              </div>
              <p>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
              <div className="news_btn">
                <div className="btn1">
                    <button>Инвестировать</button>
                </div>
                <div className="btn2">
                    <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news_card_img busines1">
            <img src={investor1} alt="investor" />
          </div>
          </div>
          <div className="news_card1 car">
            <div className="news_card_title">
              <h5>Финансирование</h5>
              <h3>Авто Рассрочка</h3>
              <div className="news_wrap">
                <div className="news_wrap1">
                  <h1>5 млн</h1>
                  <h4>Сумма, до</h4>
                </div>
                <div className="news_wrap1">
                <h1>3 лет</h1>
                <h4>Срок, до</h4>
                </div>
              </div>
              <p>Отсутствие обязательности страхования КАСКО. Первоначальный взнос от 10%</p>
              <div className="news_btn">
                <div className="btn1">
                    <button>Оформить</button>
                </div>
                <div className="btn2">
                    <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news_card_img">
            <img src={carImg} alt="investor" />
          </div>
          </div>
        </div>
        <div className="news_card_wrapper news2">
        <div className="news_card1 car">
            <div className="news_card_title">
              <h5>Финансирование</h5>
              <h3>Экспресс Рассрочка</h3>
              <div className="news_wrap">
                <div className="news_wrap1">
                  <h1>1 млн</h1>
                  <h4>Сумма, до</h4>
                </div>
                <div className="news_wrap1">
                <h1>3 лет</h1>
                <h4>Срок, до</h4>
                </div>
              </div>
              <p>Финансирование физическим лицам для приобретения необходимых товаров</p>
              <div className="news_btn">
                <div className="btn1">
                    <button>Оформить</button>
                </div>
                <div className="btn2">
                    <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news_card_img">
            <img src={machine} alt="investor" />
          </div>
          </div>
          <div className="news_card1">
            <div className="news_card_title">
              <h5>Инвестиции</h5>
              <h3>Вклад Активный</h3>
              <div className="news_wrap">
                <div className="news_wrap1">
                  <h1>16,5%</h1>
                  <h4>Доходность, до</h4>
                </div>
                <div className="news_wrap1">
                <h1>90 дней</h1>
                <h4>Срок вклада, от</h4>
                </div>
              </div>
              <p>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
              <div className="news_btn">
                <div className="btn1">
                    <button>Инвестировать</button>
                </div>
                <div className="btn2">
                    <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news_card_img busines">
            <img src={businessman} alt="investor" />
          </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default News;

import "./index.css";
import img_1 from "../../assets/images/img1.png";
const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
   <div className="showcase_wrapper">
   <div className="showcase_title">
          <h1>
            Инвестируйте с повышенной доходностью до <span>19%</span> годовых
          </h1>
          <p>100% обеспеченность активами, прибыль каждые 3 месяца!</p>
          <div className="showcase_btn">
            <button className="btn1">Инвестировать</button>
            <button className="btn2">Подробнее</button>
          </div>
        </div>
        <div className="showcase_img">
            <img src={img_1} alt="Investment Opportunity" />
        </div>
   </div>
      </div>
    </section>
  );
};

export default Showcase;

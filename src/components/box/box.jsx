
import React, { useState } from 'react';
import "./box.css";
import iconRight from "../../assets/images/icon_right.png";
import target from "../../assets/images/Target.png";
import boxImg from "../../assets/images/attachment.jpeg";

const Box = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <section className="box">
      <div className="container">
        <div className="box_wrapper">
          <div className="box_wrap">
            <img src={iconRight} alt="" />
            <p>Опыт команды в сфере партнерских финансов более 10 лет.</p>
          </div>
          <div className="box_wrap">
            <img src={target} alt="" />
            <p>
              Соответствие деятельности компании высоким этическим и правовым
              стандартам
            </p>
          </div>
        </div>
        <div className="box_title">
          <h1>Рассчитай свои накопления и доход</h1>

          <div className="box_wrapper2">
            <div className="box_wrap1">
              <div className="box_card">
                <p>Сумма вклада</p>
                <h3>1 000 000 ₽</h3>
              </div>
              <input className="input_range" type="range" />
              <div className="box_card">
                <p>Срок инвестирования</p>
                <h3>24 месяца</h3>
              </div>
              <input className="input_range" type="range" />
              <div className="box_card">
                <p>Порядок выплаты дохода</p>
              </div>
              <div className="box_card_btn">
                <button
                  className="btn3"
                  style={{
                    backgroundColor: isChecked1 ? "#fff" : "transparent",
                    border: isChecked1 ? "none" : "1px solid #C6D9E9",
                  }}
                >
                  <input
                    id="check"
                    type="checkbox"
                    checked={isChecked1}
                    onChange={() => setIsChecked1(!isChecked1)}
                  />
                  <label
                    htmlFor="check"
                    style={{ color: isChecked1 ? "black" : "#6E9BB8" }}
                  >
                    Ежемесячно
                  </label>
                </button>
                <button
                  className="btn4"
                  style={{
                    backgroundColor: isChecked2 ? "#fff" : "transparent",
                    border: isChecked2 ? "none" : "1px solid #C6D9E9",
                  }}
                >
                  <input
                    id="check1"
                    type="checkbox"
                    checked={isChecked2}
                    onChange={() => setIsChecked2(!isChecked2)}
                  />
                  <label
                    htmlFor="check1"
                    style={{ color: isChecked2 ? "black" : "#6E9BB8" }}
                  >
                    В конце срока
                  </label>
                </button>
              </div>

              <div className="box_card">
                <p>Пополнение вклада</p>
                <h3>
                  30 000 ₽ /<span>в месяц</span>
                </h3>
              </div>
              <input className="input_range" type="range" />
            </div>
            <div className="box_wrap2">
              <img src={boxImg} alt="" />
            </div>
            <div className="box_wrap3">
              <div className="box_card3">
                <h2>12,5%</h2>
                <p>Доходность</p>
                <h2>282 366 ₽</h2>
                <p>Сумма доходности</p>
                <h2>1 282 366 ₽</h2>
                <p>Итоговая сумма</p>
                <button className="btn1">Инвестировать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;

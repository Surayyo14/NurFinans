import "./index.css";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info_title">
          <h2>Полезная информация</h2>
        </div>
        <div className="info_wrapper">
          <div className="info_card">
            <div className="info_card_item">
              <h6>Ответы</h6>
              <span>
                <i class="fa-regular fa-circle-question"></i>
              </span>
            </div>
            <h3>Часто задаваемые <br /> вопросы</h3>
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>Что такое инвестиции? Зачем нужно инвестировать?</p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>
                  Какие стратегии инвестирования существуют и какую лучше
                  выбрать?
                </p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>
                  Как защищены мои инвестиции? Что будет, если компания
                  обанкротится?
                </p>
              </li>
            </ul>
          </div>
          <div className="info_card">
            <div className="info_card_item">
              <h6>Халяль</h6>
              <span>
                <i class="fa-solid fa-circle-half-stroke"></i>
              </span>
            </div>
            <h3>Отличие исламских <br /> инвестиций от неисламских</h3>
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>Термин «Риба» - что такое ростовщические операциии?</p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>Как проверяют компании на соответствие нормам халяль.?</p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>Термин «Сукук» - эквивалент исламских облигаций</p>
              </li>
            </ul>
          </div>
          <div className="info_card">
            <div className="info_card_item">
              <h6>Полезное</h6>
              <span>
              <i class="fa-solid fa-graduation-cap"></i>
              </span>
            </div>
            <h3>Школа <br />
            инвестора</h3>
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>7 финансовых советов на 2021 год.
                Что делать, чтобы накопить на цель?</p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>
                Какие книги надо прочитать
                инвестору-новичку: топ-5 книг
                </p>
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p>
                Сколько нужно денег,
                чтобы начать инвестировать
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

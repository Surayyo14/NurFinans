import "../index.css";

const FooterBottom = () => {
  return (
    <div className="footer_bottom">
      <h3>Заголовок о доп моментах</h3>
      <p>
        Давно выяснено, что при оценке дизайна и композиции читаемый текст
        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
        обеспечивает более или менее стандартное заполнение шаблона, а также
        реальное распределение букв и пробелов в абзацах, которое не получается
        при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш
        текст.." Многие программы электронной вёрстки и редакторы HTML
        используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по
        ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц
        всё ещё дожидаются своего настоящего рождения.{" "}
      </p>
      <div className="footer_bottom_link">
        <a href="">© 2021 АО «НурФинанс»</a>
        <a href="">Политика конфиденциальности</a>
      </div>
    </div>
  );
};

export default FooterBottom;

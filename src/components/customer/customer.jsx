import "./index.css";

const Customer = () => {
  return (
    <section className="customer">
      <div className="container">
        <div className="customer_title">
          <h2>Отзывы клиентов</h2>
        </div>
        <div className="customer_wrapper">
          <div className="customer_wrap">
            <div className="customer_card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JyLf-KKQNhs?si=y2rZviP9E1OmZqI1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h3>Евгений Садков</h3>
              <p>Программа – Экспресс Рассрочка</p>
            </div>
            <div className="customer_card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/n6LXsK-xzJA?si=6GoCChIBIAGPU-Au" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h3>Евгений Садков</h3>
              <p>Программа – Экспресс Рассрочка</p>
            </div>
            <div className="customer_card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/us8mRK7K4s4?si=QT2bqeSB38M_Xjna" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h3>Евгений Садков</h3>
              <p>Программа – Экспресс Рассрочка</p>
            </div>
          </div>
          <div className="customer_btn">
            <button>Смотреть больше отзывов</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;

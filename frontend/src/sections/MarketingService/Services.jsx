import React, { useEffect } from "react";

import ServiceImg from "../../assets/images/img_blockmarketing-service.png";
import ServiceBgImg from "../../assets/images/Vectormarketing-service-bg.png";

import "./services.scss";

function MarketingService() {
  useEffect(() => {
    const allItems = document.querySelectorAll(".services-list-item");
    for (const i of allItems) {
      i.addEventListener("click", (e) => {
        for (const j of allItems) {
          j.classList.remove("services-list-item-open");
        }
        i.classList.add("services-list-item-open");
      });
    }
  });

  return (
    <div className="services">
      <img src={ServiceBgImg} alt="" className="services-bg" />
      <div className="services-list">
        <div className="services-list-item services-list-item-open">
          <h1 className="list-item-title">SMM</h1>
          <p className="list-item-txt">
            Креативная, опытная команда, которая любит решать сложные задачи.
            Делаем то, что другим не под силу. Залог нашего успеха в углубленном
            анализе и желании стать не просто компанией, которая Вам помогает, а
            быть надежным и, самое главное, эффективным партнером на долгие
            годы.
          </p>
        </div>
        <div className="services-list-item">
          <h1 className="list-item-title">Контекстная реклама</h1>
          <p className="list-item-txt list-item-txt-open">
            Креативная, опытная команда, которая любит решать сложные задачи.
            Делаем то, что другим не под силу. Залог нашего успеха в углубленном
            анализе и желании стать не просто компанией, которая Вам помогает, а
            быть надежным и, самое главное, эффективным партнером на долгие
            годы.
          </p>
        </div>
        <div className="services-list-item">
          <h1 className="list-item-title">SEO Продвижение</h1>
          <p className="list-item-txt">
            Креативная, опытная команда, которая любит решать сложные задачи.
            Делаем то, что другим не под силу. Залог нашего успеха в углубленном
            анализе и желании стать не просто компанией, которая Вам помогает, а
            быть надежным и, самое главное, эффективным партнером на долгие
            годы.
          </p>
        </div>
        <div className="services-list-item">
          <h1 className="list-item-title">Таргет</h1>
          <p className="list-item-txt">
            Креативная, опытная команда, которая любит решать сложные задачи.
            Делаем то, что другим не под силу. Залог нашего успеха в углубленном
            анализе и желании стать не просто компанией, которая Вам помогает, а
            быть надежным и, самое главное, эффективным партнером на долгие
            годы.
          </p>
        </div>
        <div className="services-list-item">
          <h1 className="list-item-title">Perfomance-стратегия</h1>
          <p className="list-item-txt">
            Креативная, опытная команда, которая любит решать сложные задачи.
            Делаем то, что другим не под силу. Залог нашего успеха в углубленном
            анализе и желании стать не просто компанией, которая Вам помогает, а
            быть надежным и, самое главное, эффективным партнером на долгие
            годы.
          </p>
        </div>
      </div>
      <div className="services-img">
        <img src={ServiceImg} alt="service img" />
      </div>
    </div>
  );
}

export default MarketingService;

import React from "react";

import { ArticleCard } from "../../components";
import Card1 from "../../assets/images/imgcard1.png";

import "./article-cards.scss";

function ArticleCards() {
  return (
    <div className="article-cards">
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
      <ArticleCard
        img={Card1}
        date="Май, 2020"
        title="“Фишки” для интернет-магазина"
        description="Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании"
      />
    </div>
  );
}

export default ArticleCards;

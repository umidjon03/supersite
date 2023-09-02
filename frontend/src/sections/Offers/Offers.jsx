import React from "react";

import Stroke from "../../assets/images/Vector 1 (Stroke) (Stroke)stroke.png";
import { Button } from "../../components";
import BgImg from "../../assets/images/Vectoroffers-bg.png";

import "./offers.scss";

function Offers() {
  return (
    <div className="offers">
      <img src={BgImg} alt="" className="offers-bg" />
      <h1 className="offers-title">
        Наши <br /> предложения
      </h1>
      <div className="offers-cards">
        <div className="offers-cards-card">
          <h3 className="card-title">Базовый</h3>
          <div className="card-list">
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка на соответствие законодательству
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка консультации менеджером в рамках чата
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Основы контент-маркетинга</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Тестирование верстки на Windows</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
          </div>
          <div className="card-bottom">
            <h4 className="card-cost">8 900 ₽</h4>
            <Button className="card-button">Заказать</Button>
          </div>
        </div>
        <div className="offers-cards-card">
          <h3 className="card-title">Medium</h3>
          <div className="card-list">
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка на соответствие законодательству
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка консультации менеджером в рамках чата
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Основы контент-маркетинга</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Тестирование верстки на Windows</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
          </div>
          <div className="card-bottom">
            <h4 className="card-cost">14 900 ₽</h4>
            <Button className="card-button">Заказать</Button>
          </div>
        </div>
        <div className="offers-cards-card">
          <h3 className="card-title">Pro</h3>
          <div className="card-list">
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка на соответствие законодательству
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка консультации менеджером в рамках чата
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Основы контент-маркетинга</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Тестирование верстки на Windows</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
          </div>
          <div className="card-bottom">
            <h4 className="card-cost">18 900 ₽</h4>
            <Button className="card-button">Заказать</Button>
          </div>
        </div>
        <div className="offers-cards-card">
          <h3 className="card-title">Онлайн магазин</h3>
          <div className="card-list">
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка на соответствие законодательству
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">
                Проверка консультации менеджером в рамках чата
              </p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Основы контент-маркетинга</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Тестирование верстки на Windows</p>
            </div>
            <div className="card-list-item">
              <img src={Stroke} alt="" className="stroke" />
              <p className="list-item-txt">Базовая SEO оптимизация</p>
            </div>
          </div>
          <div className="card-bottom">
            <h4 className="card-cost">28 900 ₽</h4>
            <Button className="card-button">Заказать</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;

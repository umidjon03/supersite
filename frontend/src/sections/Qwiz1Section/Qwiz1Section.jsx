import React, { useState } from "react";
import { Link } from "react-router-dom";

import LandingImg from "../../assets/images/Vectorqwiz-landing-page.svg";
import MultipleImg from "../../assets/images/Vector 19 (Stroke)multiple-page.png";
import InternetImg from "../../assets/images/Vectorinternet-store.png";
import NotSureImg from "../../assets/images/Vectornot-sure.png";
import NextPageIcon from "../../assets/images/Vector 15 (Stroke)right.png";

import { Button, Container } from "../../components";

import "./qwiz1-section.scss";

function Qwiz1Section() {
  const [siteType, setSiteType] = useState("not_sure");
  return (
    <div className="qwiz1-section">
      <Container>
        <div className="form">
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src={LandingImg} alt="" />
              </div>
              <div className="input">
                <input
                  type="radio"
                  name="type"
                  id="land"
                  onChange={() => {
                    setSiteType("landing_page");
                  }}
                />
                <label htmlFor="land">Landing page</label>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={MultipleImg} alt="" />
              </div>
              <div className="input">
                <input
                  type="radio"
                  name="type"
                  id="mult"
                  onChange={() => {
                    setSiteType("corporation_site");
                  }}
                />
                <label htmlFor="mult">Многстраничный сайт</label>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={InternetImg} alt="" />
              </div>
              <div className="input">
                <input
                  type="radio"
                  name="type"
                  id="inter"
                  onChange={() => {
                    setSiteType("internet_store");
                  }}
                />
                <label htmlFor="inter">Интернет-магазин</label>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={NotSureImg} alt="" />
              </div>
              <div className="input">
                <input
                  type="radio"
                  name="type"
                  id="notsure"
                  onChange={() => {
                    setSiteType("not_sure");
                  }}
                />
                <label htmlFor="notsure">Не уверен(-а)</label>
              </div>
            </div>
          </div>
          <Link
            className="form-link"
            to="/qwiz2"
            onClick={() => {
              sessionStorage.setItem("type", siteType);
            }}
          >
            <Button className="form-btn">
              Продолжить <img src={NextPageIcon} alt="" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Qwiz1Section;

import React from "react";
import cn from "classnames";

import { Button } from "../";

import macbook from "../../assets/images/macbook.png";

import styles from "./Project.module.scss";

export const Project = ({ type, title, image, description }) => {
  return (
    <div className={cn(styles.project)}>
      <div className={cn(styles.project__info)}>
        <span className={cn(styles.project__type)}>{type}</span>

        <h3 className={cn(styles.project__title)}>{title}</h3>

        <p className={cn(styles.project__description)}>{description}</p>

        <Button className={cn(styles.project__button)}>Перейти на сайт</Button>
      </div>

      <div className={cn(styles.project__image)}>
        <img src={macbook} alt="macbook" />
      </div>
    </div>
  );
};

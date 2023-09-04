import React from "react";
import cn from "classnames";

import { Link } from "../";

import styles from "./ArticleCard.module.scss";

export const ArticleCard = ({ img, date, title, description }) => {
  return (
    <div className={cn(styles.card)}>
      <div className={cn(styles.card__image)}>
        <img src={img} alt={title} />
      </div>

      <div className={cn(styles.card__info)}>
        <time className={cn(styles.card__date)} dateTime={date}>
          {date}
        </time>

        <h3 className={cn(styles.card__heading)} title={title}>
          {title}
        </h3>

        <p className={cn(styles.card__description)}>{description}</p>

        <Link
          className={cn(styles.card__link)}
          color="primary"
          textCase="upper"
          size="small"
          dot="light-primary"
          href="/"
        >
          Читать подробнее
        </Link>
      </div>
    </div>
  );
};

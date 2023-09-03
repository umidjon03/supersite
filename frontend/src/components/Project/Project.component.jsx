import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { projectTypes } from "../../helpers/projectType.helper";

import { Button } from "../";

import macbook from "../../assets/images/macbook.png";

import styles from "./Project.module.scss";

export const Project = ({
  className,
  type,
  title,
  image,
  description,
  button,
  href,
  target = "local",
  withNav = false,
  reverse = false,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate(href);
  };

  return (
    <div
      className={cn(styles.project, className, {
        [styles["project--nav"]]: withNav,
        [styles["project--reverse"]]: reverse,
      })}
    >
      <div className={cn(styles.project__info)}>
        {type && (
          <span className={cn(styles.project__type)}>
            {projectTypes[type].one}
          </span>
        )}

        <h3 className={cn(styles.project__title)}>{title}</h3>

        <p className={cn(styles.project__description)}>{description}</p>

        {target === "local" ? (
          <Button
            className={cn(styles.project__button)}
            onClick={handleNavigate}
          >
            {button}
          </Button>
        ) : (
          <Button className={cn(styles.project__anchor)}>
            <a href={href} target="_blank" rel="noreferrer">
              {button}
            </a>
          </Button>
        )}
      </div>

      <div className={cn(styles.project__comp)}>
        <img
          className={cn(styles.project__comp__macbook)}
          src={macbook}
          alt="macbook"
        />
        <img
          className={cn(styles.project__comp__image)}
          src={image}
          alt="macbook"
        />
      </div>
    </div>
  );
};

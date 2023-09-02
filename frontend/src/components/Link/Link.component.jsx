import React from "react";
import { Link as ReactLink } from "react-router-dom";
import cn from "classnames";

import styles from "./Link.module.scss";

export const Link = ({
  className,
  href,
  size = "small",
  textCase = "lower",
  color = "default",
  dot = "gray",
  isActive = false,
  count,
  children,
}) => {
  return (
    <ReactLink
      className={cn(styles.link, className, {
        [styles["link--big"]]: size === "big",
        [styles["link--upper"]]: textCase === "upper",
        [styles["link--primary"]]: color === "primary",
        [styles["link--active"]]: isActive,
        [styles["link--light-primary-dot"]]: dot === "light-primary",
        [styles["link--primary-dot"]]: dot === "primary",
      })}
      to={href}
    >
      <span className={cn(styles.link__inner)}>
        <span className={cn(styles.link__text)}>{children}</span>

        {!!(count + 1) && (
          <span className={cn(styles.link__count)}>{count}</span>
        )}
      </span>
    </ReactLink>
  );
};

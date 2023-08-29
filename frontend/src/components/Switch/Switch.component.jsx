import cn from "classnames";

import styles from "./Switch.module.scss";

export const Switch = () => {
  return (
    <div className={cn(styles.switch)}>
      <div className={cn(styles.switch__button)}></div>
    </div>
  );
};

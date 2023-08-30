import cn from "classnames";

import styles from "./Switch.module.scss";

export const Switch = ({
  className,
  disabled,
  isActive,
  onClick,
  ...props
}) => {
  const handleSpace = (e) => {
    if (e.code !== "Space") return;
    onClick();
  };

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles["switch--active"]]: isActive,
      })}
    >
      <span className={cn(styles.switch__status)}>ON</span>

      <div
        className={cn(styles.switch, {
          [styles["switch--disabled"]]: disabled,
        })}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => handleSpace(e)}
        {...props}
      >
        <div className={cn(styles.switch__button)}></div>
      </div>

      <span className={cn(styles.switch__status)}>OFF</span>
    </div>
  );
};

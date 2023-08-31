import React from "react";
import cn from "classnames";

import { ReactComponent as Arrow } from "../../assets/icons/swiper-arrow.svg";

import styles from "./SwiperButton.module.scss";

export const SwiperButton = React.forwardRef(
  ({ className, arrow = "left", ...props }, ref) => {
    const [event, setEvent] = React.useState({ x: 15, isActive: false });

    const handlePointerMode = (evt, isActive = true) => {
      if (evt.nativeEvent.layerX < 15) {
        setEvent({ x: 15, isActive: isActive });
        return;
      }
      if (evt.nativeEvent.layerX > 87) {
        setEvent({ x: 87, isActive: isActive });
        return;
      }

      setEvent({ x: evt.nativeEvent.layerX, isActive: isActive });
    };

    return (
      <button
        className={cn(styles.button, className, {
          [styles["button--active"]]: event.isActive,
          [styles["button--left"]]: arrow === "left",
          [styles["button--right"]]: arrow === "right",
        })}
        ref={ref}
        onPointerMove={(evt) => handlePointerMode(evt, true)}
        onPointerLeave={(evt) => handlePointerMode(evt, false)}
        {...props}
      >
        <Arrow />

        <span
          className={cn(styles.button__circle)}
          style={{
            left: event.x - 10,
            opacity: event.isActive ? 1 : 0,
          }}
        />
      </button>
    );
  }
);

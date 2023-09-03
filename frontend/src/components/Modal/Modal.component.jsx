import cn from "classnames";

import { ReactComponent as Close } from "../../assets/icons/modal-close.svg";

import styles from "./Modal.module.scss";

export const Modal = ({ className, children, isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={cn(styles.modal, className)}>
          <div
            className={cn(styles.modal__back)}
            onClick={() => setIsOpen(false)}
          />

          <div className={cn(styles.modal__inner)}>
            <button
              className={cn(styles.modal__button)}
              onClick={() => setIsOpen(false)}
            >
              <Close />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

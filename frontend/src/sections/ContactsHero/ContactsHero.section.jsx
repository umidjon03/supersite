import React from "react";
import cn from "classnames";

import { Button, ContactForm, Container, Modal } from "../../components";

import styles from "./ContactsHero.module.scss";

export const ContactsHero = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={cn(styles.contacts)}>
      <Modal
        className={cn(styles.contacts__modal)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <ContactForm />
      </Modal>

      <Container className={cn(styles.contacts__container)}>
        <div className={cn(styles.contacts__inner)}>
          <h2 className={cn(styles.contacts__heading)}>
            <strong>Есть проект?</strong>
            <span>С нетерпением приступим к нему</span>
          </h2>

          <div className={cn(styles.contacts__info)}>
            <span className={cn(styles.contacts__link)}>
              г.Москва ул. Освобождения, д.3
            </span>
            <span className={cn(styles.contacts__link)}>
              <a href="tel:+70663641919">+7(066) 364 19 19</a>
              <span> / </span>
              <a href="mailto:info@DidgiKey">info@DidgiKey</a>
            </span>
          </div>

          <Button
            className={cn(styles.contacts__button)}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Связаться с нами
          </Button>
        </div>
      </Container>
    </section>
  );
};

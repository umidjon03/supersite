import React from "react";

import { Button, ContactForm, Modal } from "../../components";

import "./contacts-hero.scss";

export const ContactsHero = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="contacts">
      <Modal
        className={`contacts-modal ${isOpen ? "contacts-modal-open" : ""}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <ContactForm />
      </Modal>

      <div className="contacts-info">
        <h2 className="info-title">Есть проект?</h2>
        <h4 className="info-summary">С нетерпением приступим к нему</h4>
        <p className="info-txt">г.Москва ул. Освобождения, д.3</p>
        <p className="info-txt">+7(066) 364 19 19 / info@DidgiKey</p>

        <Button
          className="info-btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Связаться с нами
        </Button>
      </div>
    </section>
  );
};

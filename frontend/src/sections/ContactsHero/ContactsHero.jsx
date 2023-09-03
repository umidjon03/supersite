import React from "react";
import { useForm } from "react-hook-form";

import { postContact } from "../../api/contact";

import { Button, Modal } from "../../components";

import "./contacts-hero.scss";

function ContactsHero() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    const { data } = await postContact(formData);

    if (data) {
      reset();
    }
  };

  return (
    <section className="contacts">
      <Modal
        className={`contacts-modal ${isOpen ? "contacts-modal-open" : ""}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <h2 className="modal-title">Обратная связь</h2>

        <p className="modal-txt">
          Наши менеджеры с радостью ответят на все ваши вопросы
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Имя"
          />
          <input
            {...register("phone", { required: true })}
            type="text"
            placeholder="Телефон"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="E-mail"
          />
          <textarea
            {...register("comment")}
            cols="30"
            rows="6"
            placeholder="Здесь могут быть ваши комментарии"
          ></textarea>
          <Button className="modal-btn">Отправить</Button>
        </form>
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
}

export default ContactsHero;

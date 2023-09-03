import React from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { postContact } from "../../api/contact";

import { Button } from "../";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { data } = await postContact(formData);

    if (data) {
      reset();
    }
  };

  return (
    <div className={cn(styles.wrapper)}>
      <h3 className={cn(styles.heading)}>Обратная связь</h3>

      <p className={cn(styles.description)}>
        Наши менеджеры с радостью ответят на все ваши вопросы
      </p>

      <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className={cn(styles.input, {
            [styles["input--error"]]: errors.name,
          })}
          name="name"
          type="text"
          placeholder="Имя"
        />

        <input
          {...register("phone", { required: true })}
          className={cn(styles.input, {
            [styles["input--error"]]: errors.phone,
          })}
          name="phone"
          type="text"
          placeholder="Телефон"
        />

        <input
          {...register("email", { required: true })}
          className={cn(styles.input, {
            [styles["input--error"]]: errors.email,
          })}
          name="email"
          type="email"
          placeholder="E-mail"
        />

        <textarea
          {...register("comment")}
          className={cn(styles.input, styles["input--textarea"], {
            [styles["input--error"]]: errors.comment,
          })}
          name="comment"
          cols="30"
          rows="6"
          placeholder="Здесь могут быть ваши комментарии"
        ></textarea>

        <Button className={cn(styles.button)}>Отправить</Button>
      </form>
    </div>
  );
};

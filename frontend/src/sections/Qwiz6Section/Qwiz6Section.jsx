import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cn from "classnames";

import { postQwiz } from "../../api/qwiz";
import { Button } from "../../components";

import Prev from "../../assets/images/Vector 15 (Stroke)left.png";
import Next from "../../assets/images/Vector 15 (Stroke)right.png";

import styles from "../../components/ContactForm/ContactForm.module.scss";
import "./qwiz6-section.scss";

function Qwiz6Section() {
  const onSendData = async () => {
    const { data } = await postQwiz();

    if (data) {
      window.location.reload();
      sessionStorage.clear();
    }
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="qwiz6-section qwiz2-section">
      <div className={cn(styles.wrapper)}>
        <form className={cn(styles.form)}>
          <input
            {...register("name", { required: true })}
            className={cn(styles.input, {
              [styles["input--error"]]: errors.name,
            })}
            name="name"
            type="text"
            value={name}
            placeholder="Имя"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            {...register("phone", { required: true })}
            className={cn(styles.input, {
              [styles["input--error"]]: errors.phone,
            })}
            name="phone"
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
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
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </form>
      </div>
      <div className="btns">
        <Link to="/qwiz5" className="link">
          <Button className="prev">
            <img src={Prev} alt="" /> Назад
          </Button>
        </Link>
        <Link
          to="/qwiz7"
          className="link"
          onClick={() => {
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("comment", comment);
            onSendData();
          }}
        >
          <Button className="next">
            Продолжить <img src={Next} alt="" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Qwiz6Section;

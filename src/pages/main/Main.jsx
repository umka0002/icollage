import React from "react";
import css from "./Main.module.css";
import main_img from "../../assets/images/main_img.png";
import Advantages from "../../components/advantages/Advantages";

export default function Main() {
  return (
    <div className="container">
      <div className={css.main}>
        <div className={css.img}>
          <img src={main_img} alt="#" />
        </div>
        <div className={css.right}>
          <p>iCourses “Учись сегодня, чтобы стать лидером завтрашнего дня.”</p>
          <button>Подать заявку</button>
        </div>
      </div>
      <Advantages/>
    </div>
  );
}

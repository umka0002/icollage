import css from "./Advantages.module.css";

export default function Advantages() {
  return (
    <div className="container">
      <div className={css.advantages}>
        <button className={css.advan}>Качество</button>
        <button className={css.advan}>Доступность</button>
        <button className={css.advan}>Гибкость</button>
        <button className={css.advan}>Сертификация</button>
      </div>
    </div>
  );
}

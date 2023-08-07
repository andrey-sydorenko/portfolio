import styles from "./input.module.scss";

const Input = () => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.input__label}>Name</label>
      <input className={styles.input} />
    </div>
  );
};

export default Input;

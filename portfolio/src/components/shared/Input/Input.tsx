import classNames from "classnames";
import styles from "./input.module.scss";

interface IInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  multiline?: boolean;
  name: string;
  error?: string | boolean;
}

const Input = ({
  value,
  onChange,
  label,
  name,
  error,
  multiline,
}: IInputProps) => {
  const Component = multiline ? "textarea" : "input";

  return (
    <div className={styles.input__wrapper}>
      <label className={styles.input__label}>{label}</label>
      <Component
        value={value}
        onChange={onChange}
        name={name}
        className={classNames([
          styles.input,
          { [styles.input__error]: !!error },
        ])}
      />
    </div>
  );
};

export default Input;

import classNames from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  type = "button",
  disabled,
  label,
  onClick,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classNames([
        styles.button,
        { [styles.button__disabled]: disabled },
      ])}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

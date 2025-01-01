import React, { type ButtonHTMLAttributes } from "react";
import styles from "../../styles/components/button.module.scss";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { FC, ReactElement } from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  children: ReactElement | string;
  type: "primary" | "secondary" | "danger" | "info" | "outline";
  className?: string;
  disabled?: boolean;
}

const buttonTypes = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",
  secondary: "",
  danger:
    "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white",
  info: "text-gray-900 hover:bg-gray-50",
  outline: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
};

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
  className,
}) => {
  return (
    <div
      className={classNames(
        "inline-block rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        buttonTypes[type],
        {
          "cursor-pointer": onClick,
          "pointer-events-none": disabled,
          "opacity-70": disabled,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export { Button };
export type { ButtonProps };

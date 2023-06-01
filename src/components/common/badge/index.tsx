import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface BadgeProps {
  linkTo?: string;
  children: string;
}

const className =
  "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";

const Badge: FC<BadgeProps> = ({ children, linkTo }) => {
  if (linkTo) {
    return (
      <Link to={linkTo} className={classNames(className, "hover:bg-indigo-50")}>
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
};

export { Badge };
export type { BadgeProps };

import { FC, ReactNode } from "react";
import { DynamicComponent } from "..";
import classNames from "classnames";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  children: ReactNode;
  tag: TagVariants;
  className?: string;
}

const TYPOGRAPHY_STYLES = {
  h1: "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",
  h2: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
  h3: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
  h4: "text-xl font-bold tracking-tight text-gray-900 sm:text-2xl",
  h5: "",
  h6: "",
  p: "text-sm leading-6 text-gray-600",
  span: "text-xs leading-6 text-gray-600",
};

const Typography: FC<TypographyProps> = ({
  tag = "p",
  className,
  children,
}) => {
  return (
    <DynamicComponent
      tag={tag}
      className={classNames(TYPOGRAPHY_STYLES[tag], className)}
    >
      {children}
    </DynamicComponent>
  );
};

export { Typography };
export type { TypographyProps };

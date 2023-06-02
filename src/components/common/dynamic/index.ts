import { createElement, FC, ReactNode } from "react";

interface DynamicComponentProps {
  children: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
}
const DynamicComponent: FC<DynamicComponentProps> = ({
  tag,
  children,
  ...props
}) => createElement(tag, props, children);

export { DynamicComponent };

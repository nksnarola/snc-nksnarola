import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-all",
      )}
    >
      {children}
    </button>
  );
};

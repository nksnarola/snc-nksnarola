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
        "px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all",
      )}
    >
      {children}
    </button>
  );
};

import React from "react";
import { log } from "../../log";

type Props = {
  children?: React.ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<Props> = ({ children, Icon, ...props }) => {
  log("<IconButton /> rendered", 2);

  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
};

export default IconButton;

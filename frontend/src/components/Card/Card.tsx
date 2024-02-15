import "./Card.css";
import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
}) => {
  return (
    <div className={"card"} onClick={onClick}>
      {" "}
      {children}
    </div>
  );
};

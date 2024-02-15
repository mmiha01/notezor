import { ChangeEvent } from "react";
import "./Input.css";

interface Props {
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  multiline?: boolean;
  placeholder?: string;
  id?: string;
}

export const Input: React.FC<Props> = ({
  value,
  multiline,
  placeholder,
  id,
  onChange,
}) => {
  const Element = multiline ? "textarea" : "input";

  return (
    <Element
      className={"input"}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

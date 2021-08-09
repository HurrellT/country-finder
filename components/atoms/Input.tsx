import { ChangeEventHandler } from "react";

const Input = ({
  name,
  id,
  type,
  placeholder,
  onChange,
}: {
  name: String;
  id: String;
  type: String;
  placeholder: String;
  onChange: ChangeEventHandler<any>;
}) => (
  <input
    className="roundedInput"
    type={type.toString()}
    name={name.toString()}
    id={id.toString()}
    placeholder={placeholder.toString()}
    onChange={onChange}
  />
);

export default Input;

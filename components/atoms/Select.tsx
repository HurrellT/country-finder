import { SelectItem } from "@/utils/types";
import { ChangeEventHandler } from "react";

const Select = ({
  name,
  text,
  id,
  onChange,
  elements,
}: {
  name: String;
  text: String;
  id: String;
  onChange: ChangeEventHandler<any>;
  elements: SelectItem[] | undefined;
}) => (
  <div className="flex-1">
    <label htmlFor={name.toString()}>{text}</label>
    <select
      className="select"
      name={name.toString()}
      id={id.toString()}
      onChange={onChange}
    >
      <option key="none" value="">
        None
      </option>
      {elements?.map((element) => (
        <option key={element.key} value={element.value.toString()}>
          {element.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
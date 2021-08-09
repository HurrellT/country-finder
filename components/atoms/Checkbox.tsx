import { ChangeEventHandler } from "react";

const Checkbox = ({
  onChange,
  text,
}: {
  onChange: ChangeEventHandler<any>;
  text: String;
}) => (
  <div className="ml-2 mr-2 mt-3">
    <label htmlFor="checkbox" className="flex items-center space-x-3 mb-3">
      <input
        type="checkbox"
        className="form-tick bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
        onChange={onChange}
      />
      <span className="text-gray-700 dark:text-white font-normal">{text}</span>
    </label>
  </div>
);

export default Checkbox;

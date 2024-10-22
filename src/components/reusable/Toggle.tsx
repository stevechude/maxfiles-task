import React from "react";

type Props = {
  id?: string;
  name?: string;
  handleToggleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
};

function Toggle({ id, name, handleToggleChange, value }: Props) {
  return (
    <div className=" flex gap-2 sm:gap-4 justify-start items-center">
      <label className="switch-label ">
        <input
          checked={value}
          id={id}
          type="checkbox"
          name={name}
          onChange={handleToggleChange}
        />
        <span className="switch-slider"></span>
      </label>
    </div>
  );
}

export default Toggle;

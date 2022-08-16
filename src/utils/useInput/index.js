import { useState } from "react";

export const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    handleChange,
    reset,
  };
};

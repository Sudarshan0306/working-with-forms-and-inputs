import React, { useState } from "react";

const useInput = (defaultValue, validateFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validateFn(enteredValue);

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const handleFieldsChange = (event) => {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  };

  return {
    value: enteredValue,
    handleFieldsChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  }
};

export default useInput;

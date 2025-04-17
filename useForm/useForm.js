import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialValue);
  }

  return {
      ...formState,
    formState,
    handleInputChange,
    onResetForm,
  }
};

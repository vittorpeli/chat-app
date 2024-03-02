import { useState } from "react";

export function useFields (initialState = {}) {
  const [fields, setFields] = useState(initialState);

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    console.log(fields)
  }

  return { fields, handleInputChange }
}
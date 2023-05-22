import { useState } from "react";

const useToggleState = (initialState = true): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState((state) => !state);
  };

  return [state, toggleState];
};

export default useToggleState;

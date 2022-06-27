import { useState } from "react";

const useToggle = (initVal: boolean = true): [boolean, () => void] => {
  const [val, setVal] = useState(initVal);
  const toggle = () => setVal(v => !v);
  return [val, toggle];
}

export default useToggle;
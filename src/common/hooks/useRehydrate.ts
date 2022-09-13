import { useEffect, useState } from 'react';

const useRehydrate = (value: string | number | boolean): string | number | boolean => {
  const [hydratedVal, setHydratedVal] = useState(value);
  useEffect(() => {
    setHydratedVal(value);
  }, [value]);
  return hydratedVal;
};

export default useRehydrate;

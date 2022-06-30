import React from 'react'

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage[key]
    return local ? local : inicial;
  });

  React.useEffect(() => {
    localStorage[key]=state;
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage

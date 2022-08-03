import { createContext, useState } from "react";
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [Light, setLight] = useState(true);

  return (
    <DataContext.Provider value={{ setLight, Light }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

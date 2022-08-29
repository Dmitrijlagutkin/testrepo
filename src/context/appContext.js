import React, { useState } from 'react';
import { usersExtractData } from '../utils/mockData';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [extractData, setExtractData] = useState(JSON.parse(usersExtractData));

  const addExtractData = (newExtractData) => {
    setExtractData([...extractData, newExtractData]);
  };

  return (
    <AppContext.Provider value={{ userExtractData: extractData, addExtractData }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;

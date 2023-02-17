import { createContext, useState } from 'react';

const InfoContext = createContext({});

const InfoProvider = ({ children }) => {
    const [infoStatus, setInfoStatus] = useState('none');
  
    return (
      <InfoContext.Provider
        value={{ infoStatus, toggleInfoStatus: () => setInfoStatus(infoStatus === 'display' ? 'none' : 'display') }}
      >
        {children}
      </InfoContext.Provider>
    );
  };
export { InfoProvider };
export default InfoContext;

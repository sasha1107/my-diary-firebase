import { createContext, useState } from 'react';

const FormContext = createContext({});

const FormProvider = ({ children }) => {
    const [status, setStatus] = useState('display');
  
    return (
      <FormContext.Provider
        value={{ status, toggleStatus: () => setStatus(status === 'display' ? 'none' : 'display') }}
      >
        {children}
      </FormContext.Provider>
    );
  };
export { FormProvider };
export default FormContext;
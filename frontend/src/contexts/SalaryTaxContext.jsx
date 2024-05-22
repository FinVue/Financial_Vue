import {createContext, useState} from 'react'

export const SalaryTaxContext = createContext();

function SalaryTaxProvider({children}) {
  const [taxedSalaryData, setTaxedSalaryData] = useState(null);


  
  return (
    <SalaryTaxContext.Provider value={{taxedSalaryData, setTaxedSalaryData}}>
      {children}
    </SalaryTaxContext.Provider>
  )
}

export default SalaryTaxProvider

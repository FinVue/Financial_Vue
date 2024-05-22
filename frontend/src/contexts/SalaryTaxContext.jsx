

import {createContext, useEffect, useState} from 'react'

export const SalaryTaxContext = createContext();

function SalaryTaxProvider({children}) {
  const [taxedSalaryData, setTaxedSalaryData] = useState({
    monthlySalary: "",
    isSssMember: "",
    sssDeductionAmt: "",
    isGsisMember: "",
    gsisDeductionAmt: "",
    isPhilHealthMember: "",
    philHealthDeductionAmt: "",
    annualSalary: "",
    finalSalary: "",
  });

  return (
    <SalaryTaxContext.Provider value={{taxedSalaryData, setTaxedSalaryData}}>
      {children}
    </SalaryTaxContext.Provider>
  )
}

export default SalaryTaxProvider

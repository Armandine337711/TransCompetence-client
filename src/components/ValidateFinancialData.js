import React from 'react';

const ValidateFinancialData = (data) => {
  const sendDatas = () => {
    fetch('https://transcompetence.herokuapp.com/financial_datas', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"exercice_year": 2025})
    })
  }
  return (
      <button onClick = {sendDatas}
      type="button" 
      className="ValidateButton"
      >
      Valider
      </button>
  );
};

export default ValidateFinancialData;
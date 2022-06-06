import React from 'react';

const ValidateFinancialData = (data) => {
  const truc = data.datas
  const truc2=JSON.stringify(truc)
  const sendDatas = () => {
    console.log('truc2', truc2)
    fetch('https://transcompetence.herokuapp.com/dp/1', {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: (
        {truc2}
      )
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
import React from 'react';

const ValidateFinancialData = (data) => {
  const sendDatas = () => {
    console.log('dataavant',data)
    let dataapres = JSON.stringify({data})
    console.log('datastring',{dataapres})
    let datarep = dataapres.data.datas
    console.log('datarep',{datarep})


        fetch('https://transcompetence.herokuapp.com/dp/1', {
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(
        {datarep}
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
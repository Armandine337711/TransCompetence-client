import React from 'react';
import '../../style/style.css'
const SalesHistory = () => {

  // let salesHistory = [
  //   ["Mr dupont", 21947, "20/03/22", 15000],
  //   ["John Doe", 45980, "12/08/21", 85000]
  // ]

  return (
    <div>
      <table className="salesTable">

        <tr>
          <th>
            Client
          </th>
          <th>
            N° Chiffrage
          </th>
          <th>
            Date
          </th>
          <th>
            Montant
          </th>
          <th>
            Accéder
          </th>
          <th>
            Dupliquer
          </th>
        </tr>
      </table>
    </div>
  );
};

export default SalesHistory;
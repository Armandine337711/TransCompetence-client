import React, { useState, useEffect } from 'react';

const AdminUserList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://transcompetence.herokuapp.com/position', {
      method: "GET",
      headers: {
        "content-type": "application/html",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div>
      <table className="salesTable">

        <tr>
          <th>
            Nom
          </th>
          <th>
           Prénom
          </th>
          <th>
            Identifiant
          </th>
          <th>
            Rôle
          </th>
          <th>
            Email
          </th>
          <th>
            Modifier
          </th>
          <th>
            Supprimer
          </th>
        </tr>
      </table>
    </div>
  );
};

export default AdminUserList;
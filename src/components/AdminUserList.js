import React from 'react';

const AdminUserList = () => {
  return (
    <>
      <table className="salesTable">

        <tr>
          <th>
            Nom
          </th>
          <th>
            Prénom
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
    </>
  );
};

export default AdminUserList;
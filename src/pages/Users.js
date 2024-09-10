import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {users.map(user => (
        <div key={user.login.uuid}>
      <img src={user.picture.medium} alt={user.name.first} />
       <h3>{`${user.name.first} ${user.name.last}`}</h3>
       <p>{user.email}</p>
       <p>{user.location.country}</p>
       </div>
      ))}
    </div>
  );
}
export default Users;

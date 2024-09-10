import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPais() {
  const { country } = useParams(); 
  const [user, setUser] = useState(null); 

  useEffect(() => {
    
    fetch(`https://randomuser.me/api/?nat=br`)
      .then(response => response.json()) 
      .then(data => setUser(data.results[0])); 
  }, [country]);

  return (
    <div>
      <img src={user.picture.medium} alt={user.name.first} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3> 
      <p>{user.email}</p>
      <p>{user.location.country}</p> 
    </div>
  );
}

export default UserPais;

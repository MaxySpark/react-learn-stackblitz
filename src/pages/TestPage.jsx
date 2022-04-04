import React, { useEffect, useState } from 'react';

import LaalButton from '../component/LaalButton';
import UserDetails from '../component/UserDetails';

import userService from '../services/user';

const TestPage = () => {
  useEffect(async () => {
    const { data: users } = await userService.getUsers();
    setUsers(users);
  }, []);
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <LaalButton name="OK OK" />
      <LaalButton name="Not Ok" />
      <LaalButton name="All Ok" />

      <div>
        {users.map((user) => (
          <UserDetails
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;

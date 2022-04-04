import React from 'react';

const UserDetails = ({ name, username, email }) => {
  return (
    <div>
      <h3>
        Name - <i>{name}</i>
      </h3>
      <h3>
        Username - <i>{username}</i>
      </h3>
      <h3>
        Email - <i>{email}</i>
      </h3>
      <hr />
    </div>
  );
};

export default UserDetails;

import React from 'react';

const LaalButton = ({ name }) => {
  return (
    <button style={{ color: 'red' }} onClick={($event) => clickConsole(name)}>
      {name}
    </button>
  );
};

const clickConsole = (name) => {
  console.log(`${name} Red Button Clicked`);
};

export default LaalButton;

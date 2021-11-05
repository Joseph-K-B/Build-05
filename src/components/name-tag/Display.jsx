import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ name, greeting }) {
  return (
    <div>
      <h2 placeholder='Name'>{name}</h2>
      <p placeholder='Greeting'>{greeting}</p>
    </div>
  );
}

Display.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
};

// export default Display;

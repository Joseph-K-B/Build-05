import React from 'react';
import PropTypes from 'prop-types';

function Controls({
  name,
  greeting,
  onNameInput,
  onGreetingInput

}) {
  return (
    <form>
      <label>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        value={name}
        onChange={onNameInput}
      />
      <label>Greeting</label>
      <input
        id='greeting'
        name='greeting'
        type='text'
        value={greeting}
        onChange={onGreetingInput}
      />
      <button aria-label='change-name'>Change Name</button>
    </form>
  );
}

Controls.propTypes = { 
  name: PropTypes.string,
  greeting: PropTypes.string
    
};

export default Controls;

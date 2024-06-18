import React, { useState } from 'react';

const MadlibForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="noun1"
        value={formValues.noun1}
        onChange={handleChange}
        placeholder="noun"
        required
      />
      <input
        type="text"
        name="noun2"
        value={formValues.noun2}
        onChange={handleChange}
        placeholder="noun"
        required
      />
      <input
        type="text"
        name="adjective"
        value={formValues.adjective}
        onChange={handleChange}
        placeholder="adjective"
        required
      />
      <input
        type="text"
        name="color"
        value={formValues.color}
        onChange={handleChange}
        placeholder="color"
        required
      />
      <button type="submit">Get Story</button>
    </form>
  );
};

export default MadlibForm;

import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const Madlib = () => {
  const [words, setWords] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formWords) => {
    setWords(formWords);
    setSubmitted(true);
  };

  const handleReset = () => {
    setWords({});
    setSubmitted(false);
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      {submitted ? (
        <MadlibStory words={words} onReset={handleReset} />
      ) : (
        <MadlibForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Madlib;

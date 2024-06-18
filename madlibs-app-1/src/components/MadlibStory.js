import React from 'react';

const MadlibStory = ({ words, onReset }) => {
  const { noun1, noun2, adjective, color } = words;
  const story = `Once upon a time, there was a ${adjective} ${noun1} who loved a ${color} ${noun2}.`;

  return (
    <div>
      <p>{story}</p>
      <button onClick={onReset}>Create Another Story</button>
    </div>
  );
};

export default MadlibStory;

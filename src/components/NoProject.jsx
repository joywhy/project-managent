import React from 'react';
import NoProjectImage from '../assets/no-projects.png';

function NoProject({ onCreate }) {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <img src={NoProjectImage} alt="no project" className="w-20" />
      <h1>no project</h1>
      <button onClick={onCreate} className="p-4 bg-black rounded-lg text-white">
        add project
      </button>
    </div>
  );
}

export default NoProject;

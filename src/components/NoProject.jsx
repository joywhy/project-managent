import React from 'react';
import NoProjectImage from '../assets/no-projects.png';

function NoProject({ onCreate }) {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <img
        src={NoProjectImage}
        alt="no project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h1 className="text-xl font-bold text-stone-500 my-4">
        No project Selected
      </h1>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button
          onClick={onCreate}
          className="p-4 bg-black rounded-lg text-white"
        >
          add project
        </button>
      </p>
    </div>
  );
}

export default NoProject;

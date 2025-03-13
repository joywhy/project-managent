import React from 'react';

function SideBar({ onCreate, projects, isActiveIndex, handleSelect }) {
  let projectTitlesList = '';

  if (projects.length > 0 && projects[0].title) {
    projectTitlesList = projects.map((project, index) => {
      return (
        <li
          key={project.title + index}
          className={`p-2  ${
            isActiveIndex === index ? 'text-white' : 'text-gray-600'
          }  text-white rounded mt-2`}
        >
          <button onClick={() => handleSelect(index)}> {project.title}</button>
        </li>
      );
    });
  }

  return (
    <aside className="w-1/3 px-5 py-16 bg-stone-900 text-white md:w-72 rounded-r-2xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">project</h2>
      <button
        onClick={onCreate}
        className="px-4 py-2 text-xs md:text-base bg-stone-800 text-white rounded"
      >
        add project
      </button>
      <ol className="mt-5">{projectTitlesList}</ol>
    </aside>
  );
}

export default SideBar;

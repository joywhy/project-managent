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
    <aside className="w-1/4 bg-slate-800 text-white p-5">
      <h1>project</h1>
      <button
        onClick={onCreate}
        className="p-3 bg-black text-white rounded mt-10"
      >
        add project
      </button>
      <ol className="mt-5">{projectTitlesList}</ol>
    </aside>
  );
}

export default SideBar;

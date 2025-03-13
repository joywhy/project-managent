import React from 'react';

function Task({ projects, handleTasks }) {
  const ref = React.useRef();
  let tasks = <p>no tasks</p>;
  if (projects.projects[projects.isAdding].tasks) {
    tasks = projects.projects[projects.isAdding].tasks.map((task, index) => {
      return (
        <li key={task + index} className="p-2">
          {task}
        </li>
      );
    });
  }

  return (
    <div className="flex-1 bg-gray-100">
      <h1>{projects.projects[projects.isAdding].title}</h1>
      <p>{projects.projects[projects.isAdding].dueDate}</p>
      <p>{projects.projects[projects.isAdding].description}</p>
      <pre />
      <h2>tasks</h2>
      <div className="flex">
        <input ref={ref} type="text" className="bg-slate-500 p-3" />
        <button onClick={(e) => handleTasks(e, ref.current.value)}>
          add task
        </button>
      </div>
      <ol className="mt-10 bg-slate-200 p-4 rounded-lg">{tasks}</ol>
    </div>
  );
}

export default Task;

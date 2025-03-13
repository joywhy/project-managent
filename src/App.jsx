import { useState } from 'react';
import SideBar from './components/SideBar';
import NoProject from './components/NoProject';
function App() {
  const [projects, setProject] = useState({ projects: [], isAdding: -1 });
  let isFirst = false;
  if (projects.projects?.length === 0) {
    isFirst = true;
  }

  function handleClick() {
    setProject((prevProject) => {
      return {
        projects: [...prevProject.projects],
        isAdding: prevProject.projects.length,
      };
    });
  }
  function handleCanel() {}
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = {
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: formData.get('DUE'),
    };
    setProject((prevProject) => {
      const updatedProjects = [...prevProject.projects];
      return { projects: [...prevProject.projects, newProject], isAdding: -1 };
    });
  }
  return (
    <div className="flex w-full h-screen">
      <SideBar handleClick={handleClick} />
      {projects.isAdding === -1 && <NoProject handleClick={handleClick} />}
      {projects.isAdding > -1 && (
        <form
          onSubmit={handleSubmit}
          className="w-fit h-fit flex flex-col m-auto items-center justify-center p-10  border border-red-700 text-black"
        >
          <div className="flex justify-end w-full">
            <button onClick={handleCanel} className="p-3 rounded  text-black">
              canel
            </button>
            <button type="submit">save</button>
          </div>

          <label htmlFor="title" id="title">
            title
          </label>
          <input type="text" name="title" className="bg-slate-300" />
          <label htmlFor="description" id="description">
            description
          </label>
          <textarea name="description" className="bg-slate-300"></textarea>
          <label htmlFor="DUE DATE" id="DUE">
            DUE DATE
          </label>
          <input type="date" name="DUE" className="bg-slate-300" />
        </form>
      )}
    </div>
  );
}

export default App;

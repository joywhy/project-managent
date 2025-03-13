import { useState } from 'react';
import SideBar from './components/SideBar';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
function App() {
  const [projects, setProject] = useState({ projects: [], isAdding: -1 });
  let isFirst = false;
  if (projects.projects?.length === 0) {
    isFirst = true;
  }

  function handleCreate() {
    console.log('create');
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
  function handleSelect(index) {
    console.log('select', index);
    setProject((prevProject) => {
      return { projects: [...prevProject.projects], isAdding: index };
    });
  }
  return (
    <div className="flex w-full h-screen">
      <SideBar
        handleClick={handleCreate}
        projects={projects.projects}
        isActiveIndex={projects.isAdding}
        handleSelect={handleSelect}
      />
      {projects.isAdding === -1 && <NoProject onCreate={handleCreate} />}
      {projects.isAdding === projects.projects.length && (
        <ProjectForm handleSubmit={handleSubmit} handleCanel={handleCanel} />
      )}
    </div>
  );
}

export default App;

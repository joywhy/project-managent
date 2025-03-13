import { useState } from 'react';
import SideBar from './components/SideBar';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import Task from './components/Task';
function App() {
  const [projects, setProject] = useState({ projects: [], isAdding: -1 });

  function handleCreate() {
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
      tasks: [],
    };
    setProject((prevProject) => {
      const updatedProjects = [...prevProject.projects];
      return { projects: [...prevProject.projects, newProject], isAdding: -1 };
    });
  }
  function handleSelect(index) {
    setProject((prevProject) => {
      return { projects: [...prevProject.projects], isAdding: index };
    });
  }
  function handleTasks(e, text) {
    e.preventDefault();
    setProject((prevProject) => {
      let undatedProjects = prevProject.projects.map((project) => {
        return { ...project, tasks: [text, ...project.tasks] };
      });

      return { ...prevProject, projects: undatedProjects };
    });
  }
  return (
    <div className="flex my-8 gap-8 h-screen">
      <SideBar
        onCreate={handleCreate}
        projects={projects.projects}
        isActiveIndex={projects.isAdding}
        handleSelect={handleSelect}
      />
      {projects.isAdding === -1 && <NoProject onCreate={handleCreate} />}
      {projects.isAdding === projects.projects.length && (
        <ProjectForm handleSubmit={handleSubmit} handleCanel={handleCanel} />
      )}
      {projects.isAdding !== -1 &&
        projects.isAdding < projects.projects.length && (
          <Task projects={projects} handleTasks={handleTasks} />
        )}
    </div>
  );
}

export default App;

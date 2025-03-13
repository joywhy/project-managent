import React from 'react';

function ProjectForm({ handleSubmit, handleCanel }) {
  return (
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
  );
}

export default ProjectForm;

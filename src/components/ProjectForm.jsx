import React from 'react';

function ProjectForm({ handleSubmit, handleCanel }) {
  const clases =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:outline-stone-600';
  return (
    <form onSubmit={handleSubmit} className="w-[35rem mt-16]">
      <div className="flex justify-end items-center gap-4 my-4 ">
        <button
          onClick={handleCanel}
          className="text-stone-800 hover:text-stone-950"
        >
          canel
        </button>
        <button
          type="submit "
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          save
        </button>
      </div>

      <label htmlFor="title" id="title">
        title
      </label>
      <input type="text" name="title" className={clases} />
      <label htmlFor="description" id="description">
        description
      </label>
      <textarea name="description" className={clases}></textarea>
      <label htmlFor="DUE DATE" id="DUE">
        DUE DATE
      </label>
      <input type="date" name="DUE" className={clases} />
    </form>
  );
}

export default ProjectForm;

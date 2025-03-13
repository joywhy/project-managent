import React from 'react';

function SideBar({ handleClick }) {
  return (
    <aside className="w-1/4 bg-slate-800 text-white p-5">
      <h1>project</h1>
      <button
        onClick={handleClick}
        className="p-3 bg-black text-white rounded mt-10"
      >
        add project
      </button>
      <ol className="mt-5">
        <li>project 1</li>
        <li>project 2</li>
        <li>project 3</li>
      </ol>
    </aside>
  );
}

export default SideBar;

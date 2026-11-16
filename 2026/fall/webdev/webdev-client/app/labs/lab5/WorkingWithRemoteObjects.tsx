"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [lab5Module, setLab5Module] = useState({
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
  });
  const linkClass = "mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white";
  const inputClass = "mb-2 rounded border px-2 py-1";

  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Remote Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={linkClass}
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className={linkClass} href={MODULE_API_URL}>
        Get Module
      </a>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={linkClass}
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className={linkClass} href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>

      <h4>Modifying Properties</h4>
      {/* Assignment title */}
      <div className="mb-2">
        <input id="wd-assignment-title" className={inputClass}
               defaultValue={assignment.title}
               onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        <a id="wd-update-assignment-title" className={`${linkClass} ml-2`}
           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      {/* Assignment score */}
      <div className="mb-2">
        <input id="wd-assignment-score" className={inputClass} type="number"
               defaultValue={assignment.score}
               onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
        <a id="wd-update-assignment-score" className={`${linkClass} ml-2`}
           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      {/* Assignment completed */}
      <div className="mb-2">
        <input id="wd-assignment-completed" type="checkbox"
               defaultChecked={assignment.completed}
               onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        <label htmlFor="wd-assignment-completed" className="ml-1">Completed</label>
        <a id="wd-update-assignment-completed" className={`${linkClass} ml-2`}
           href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      {/* Module name */}
      <div className="mb-2">
        <input id="wd-module-name" className={inputClass}
               defaultValue={lab5Module.name}
               onChange={(e) => setLab5Module({ ...lab5Module, name: e.target.value })} />
        <a id="wd-update-module-name" className={`${linkClass} ml-2`}
           href={`${MODULE_API_URL}/name/${lab5Module.name}`}>
          Update Module Name
        </a>
      </div>
      {/* Module description */}
      <div className="mb-2">
        <input id="wd-module-description" className={inputClass}
               defaultValue={lab5Module.description}
               onChange={(e) => setLab5Module({ ...lab5Module, description: e.target.value })} />
        <a id="wd-update-module-description" className={`${linkClass} ml-2`}
           href={`${MODULE_API_URL}/description/${lab5Module.description}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}

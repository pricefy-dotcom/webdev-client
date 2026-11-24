"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => { fetchAssignment(); }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <div className="mb-2">
        <input
          className="w-full max-w-sm rounded border px-2 py-1"
          value={assignment.title ?? ""}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <textarea
          className="w-full max-w-sm rounded border px-2 py-1"
          value={assignment.description ?? ""}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <input
          type="date"
          className="rounded border px-2 py-1"
          value={assignment.due ?? ""}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-completed"
          type="checkbox"
          checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label htmlFor="wd-completed" className="ml-2">Completed</label>
      </div>
      <div className="mb-2">
        <button
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={updateTitle}
        >
          Update Title
        </button>
      </div>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({});

  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  const updateTitle = async () => {
    const updated = await client.updateTitle(assignment.title ?? "");
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        id="wd-async-assignment-title"
        className="mb-2 block w-full rounded border px-2 py-1"
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <textarea
        className="mb-2 block w-full rounded border px-2 py-1"
        value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
      <input
        type="date"
        className="mb-2 block rounded border px-2 py-1"
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <div className="mb-2">
        <input
          type="checkbox"
          id="wd-async-completed"
          checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label htmlFor="wd-async-completed" className="ml-1">Completed</label>
      </div>
      <button
        id="wd-async-update-title"
        className="mb-2 rounded bg-blue-600 px-3 py-1 text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}

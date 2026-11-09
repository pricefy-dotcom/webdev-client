"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

const fieldClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-neutral-100";
const rowLabelClass = "pt-2 text-sm md:text-right";
const checkboxClass = "h-4 w-4 accent-blue-600";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = typeof params.cid === "string" ? params.cid : "";
  const aid = typeof params.aid === "string" ? params.aid : "";
  const router = useRouter();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a.course === cid && a._id === aid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const isNew = !existing;
  const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>(
    () => existing ?? { ...emptyAssignment, course: cid },
  );
  const listUrl = `/courses/${cid}/assignments`;
  const save = () => {
    if (isNew) {
      addAssignment(assignment);
    } else {
      updateAssignment({ ...assignment, _id: existing._id });
    }
    router.push(listUrl);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl text-sm">
      <fieldset disabled={!isFaculty} className="m-0 border-0 p-0">
        <div className="mb-4">
          <label htmlFor="wd-name" className="mb-1 block">
            Assignment Name
          </label>
          <input
            id="wd-name"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            className={fieldClass}
          />
          <p id="wd-assignment-id" className="mt-1 text-neutral-600">
            Assignment id: {aid}
          </p>
        </div>
        <textarea
          id="wd-description"
          rows={8}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          className={`${fieldClass} mb-6`}
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-[10rem_1fr]">
          <label htmlFor="wd-points" className={rowLabelClass}>
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            className={fieldClass}
          />

          <label htmlFor="wd-group" className={rowLabelClass}>
            Assignment Group
          </label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={fieldClass}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>

          <label htmlFor="wd-display-grade-as" className={rowLabelClass}>
            Display Grade as
          </label>
          <select id="wd-display-grade-as" defaultValue="A" className={fieldClass}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>

          <label htmlFor="wd-submission-type" className={rowLabelClass}>
            Submission Type
          </label>
          <div className="rounded border border-neutral-300 p-4">
            <select id="wd-submission-type" defaultValue="Online" className={fieldClass}>
              <option value="Online">Online</option>
              <option value="On Paper">Paper</option>
              <option value="No Submission">No Submission</option>
            </select>
            <fieldset className="mt-5">
              <legend className="mb-3 font-semibold">Online Entry Options</legend>
              <div className="space-y-3">
                <label htmlFor="wd-text-entry" className="flex items-center gap-2">
                  <input type="checkbox" id="wd-text-entry" className={checkboxClass} />
                  Text Entry
                </label>
                <label htmlFor="wd-website-url" className="flex items-center gap-2">
                  <input type="checkbox" id="wd-website-url" className={checkboxClass} />
                  Website URL
                </label>
                <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
                  <input type="checkbox" id="wd-media-recordings" className={checkboxClass} />
                  Media Recordings
                </label>
                <label htmlFor="wd-student-annotation" className="flex items-center gap-2">
                  <input type="checkbox" id="wd-student-annotation" className={checkboxClass} />
                  Student Annotation
                </label>
                <label htmlFor="wd-file-upload" className="flex items-center gap-2">
                  <input type="checkbox" id="wd-file-upload" className={checkboxClass} />
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>

          <span className={rowLabelClass}>Assign</span>
          <div className="space-y-4 rounded border border-neutral-300 p-4">
            <div>
              <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
                Assign to
              </label>
              <input id="wd-assign-to" defaultValue="Everyone" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
                Due
              </label>
              <input
                type="date"
                id="wd-due-date"
                value={assignment.due}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
                className={fieldClass}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                  Available from
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  value={assignment.available}
                  onChange={(e) =>
                    setAssignment({ ...assignment, available: e.target.value })
                  }
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  value={assignment.until ?? ""}
                  onChange={(e) =>
                    setAssignment({ ...assignment, until: e.target.value })
                  }
                  className={fieldClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="wd-ai-editor-notes" className="mb-1 block">
            Sample notes
          </label>
          <textarea id="wd-ai-editor-notes" rows={4} className={fieldClass} />
        </div>
      </fieldset>

      <hr className="mb-4 mt-8 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={listUrl}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline hover:bg-neutral-200">
          Cancel
        </Link>
        {isFaculty && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
            Save
          </button>
        )}
      </div>
    </div>
  );
}

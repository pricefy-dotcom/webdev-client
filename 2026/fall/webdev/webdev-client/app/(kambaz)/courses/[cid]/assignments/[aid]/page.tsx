import Link from "next/link";

const fieldClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
const rowLabelClass = "pt-2 text-sm md:text-right";
const checkboxClass = "h-4 w-4 accent-blue-600";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl text-sm">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block">
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={fieldClass} />
      </div>
      <textarea
        id="wd-description"
        rows={8}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        className={`${fieldClass} mb-6`}
      />

      <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-[10rem_1fr]">
        <label htmlFor="wd-points" className={rowLabelClass}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={fieldClass} />

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
            <input type="date" id="wd-due-date" className={fieldClass} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input type="date" id="wd-available-from" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input type="date" id="wd-available-until" className={fieldClass} />
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

      <hr className="mb-4 mt-8 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline hover:bg-neutral-200">
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline hover:bg-red-700">
          Save
        </Link>
      </div>
    </div>
  );
}

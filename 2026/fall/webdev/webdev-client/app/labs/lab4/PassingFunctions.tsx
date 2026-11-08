export default function PassingFunctions({
  message,
  userName,
  theFunction,
  theOtherFunction,
}: {
  message: string;
  userName: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${userName}`)}
        id="wd-pass-functions-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke user name function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
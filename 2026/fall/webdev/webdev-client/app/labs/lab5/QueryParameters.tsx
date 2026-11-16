"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const linkClass = "mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white";
  const url = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        className="mb-2 block rounded border px-2 py-1"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
        type="number"
      />
      <input
        id="wd-query-parameter-b"
        className="mb-2 block rounded border px-2 py-1"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
        type="number"
      />
      <a id="wd-query-parameter-add" className={linkClass} href={url("add")}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className={linkClass} href={url("subtract")}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className={linkClass} href={url("multiply")}>
        Multiply {a} × {b}
      </a>
      <a id="wd-query-parameter-divide" className={linkClass} href={url("divide")}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}

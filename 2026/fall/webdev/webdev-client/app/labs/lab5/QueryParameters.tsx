"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        type="number"
        className="mb-2 block rounded border px-2 py-1"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        type="number"
        className="mb-2 block rounded border px-2 py-1"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-query-parameter-add"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-query-parameter-subtract"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-query-parameter-multiply"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        id="wd-query-parameter-divide"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
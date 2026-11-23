"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        id="wd-path-parameter-a"
        type="number"
        className="mb-2 block rounded border px-2 py-1"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-path-parameter-b"
        type="number"
        className="mb-2 block rounded border px-2 py-1"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-path-parameter-add"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-path-parameter-subtract"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-path-parameter-multiply"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        id="wd-path-parameter-divide"
        className="mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
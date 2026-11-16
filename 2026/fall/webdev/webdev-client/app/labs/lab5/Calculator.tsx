"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async () => {
    const params = new URLSearchParams({ a, b, operation });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    // Show the server's error text instead of crashing the page
    if (!response.ok) {
      setResult(data.error);
      return;
    }
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator-next-api">
      <h3>Calculator (Next.js Route Handler)</h3>
      <label htmlFor="wd-calc-a" className="mr-1">A:</label>
      <input id="wd-calc-a" type="number" className="mb-2 mr-2 rounded border px-2 py-1"
             value={a} onChange={(e) => setA(e.target.value)} />
      <label htmlFor="wd-calc-b" className="mr-1">B:</label>
      <input id="wd-calc-b" type="number" className="mb-2 mr-2 rounded border px-2 py-1"
             value={b} onChange={(e) => setB(e.target.value)} />
      <label htmlFor="wd-calc-operation" className="mr-1">Operation</label>
      <select id="wd-calc-operation" className="mb-2 mr-2 rounded border px-2 py-1"
              value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">add</option>
        <option value="subtract">subtract</option>
        <option value="multiply">multiply</option>
        <option value="divide">divide</option>
      </select>
      <button id="wd-calc-button" className="rounded bg-blue-600 px-3 py-1 text-white"
              onClick={calculate}>
        Calculate
      </button>
      <input id="wd-calc-result" readOnly value={result}
             className="mt-2 block w-full rounded border bg-gray-100 px-2 py-1" />
      <hr />
    </div>
  );
}

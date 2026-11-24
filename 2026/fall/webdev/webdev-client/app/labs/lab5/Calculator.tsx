"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+", subtract: "−", multiply: "×", divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string) => {
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator-next-api">
      <h3>Calculator (Next.js Web API)</h3>
      <input id="wd-calc-a" type="number" className="mb-2 mr-2 rounded border px-2 py-1"
             value={a} onChange={(e) => setA(e.target.value)} />
      <select id="wd-calc-operation" className="mb-2 mr-2 rounded border px-2 py-1"
              value={operation}
              onChange={(e) => { setOperation(e.target.value); calculate(e.target.value); }}>
        <option value="add">+</option>
        <option value="subtract">−</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <input id="wd-calc-b" type="number" className="mb-2 mr-2 rounded border px-2 py-1"
             value={b} onChange={(e) => setB(e.target.value)} />
      <button id="wd-calc-button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
              onClick={() => calculate(operation)}>
        Calculate
      </button>
      <input id="wd-calc-result" readOnly value={error || result}
             className="mt-2 block w-full max-w-sm rounded border bg-gray-100 px-2 py-1" />
      <hr />
    </div>
  );
}
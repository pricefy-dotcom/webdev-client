"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HelloRoute() {
  const [hello, setHello] = useState<any>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <p>{hello.message}</p>
      <hr />
    </div>
  );
}
import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2 id="wd-full-name">Tyler Price</h2>
      <a href="https://github.com/pricefy-dotcom/webdev-client" id="wd-github">
        Github
      </a>
      <br />
      <a href="https://github.com/pricefy-dotcom/web-server" id="wd-github-node-server-repo">
        Node Server Repo
      </a>
      <br />
      <a href="https://kambaz-server-tprice.onrender.com" id="wd-render-root-url">
        Root of the server on Render
      </a>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
            <Link href="/labs/lab4" id="wd-lab4-link">Lab 4: Client State</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
            <Link href="/">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}
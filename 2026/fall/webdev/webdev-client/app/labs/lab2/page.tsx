import "./index.css"

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This sample paragraph uses the style attribute to set a purple
        background with white text.
      </p>
      <p style={{ backgroundColor:"green", color:"yellow"}}>
        This paragraph is yellow text with a green background.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the
            elements of the same name, e.g., P, we can refer to a
            specific element by its ID
        </p>
        <p id="wd-id-selector-2">
            Here&apos;s another paragraph using a different ID and a
            different look and feel
        </p>
        <p id="wd-id-selector-3">
            Here is the user created paragraph that uses a user created
            style in index.css
        </p>
      </div>
    </div>
  );
}
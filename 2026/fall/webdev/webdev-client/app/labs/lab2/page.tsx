import "./index.css";
import ForegroundColors from "./ForegroundColors";

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
      <p id="wd-ai-style-attr" style={{backgroundColor: "purple", color: "white"}}>
        This sample paragraph uses the style attribute to set a purple
        background and white text directly on the element.
      </p>
      <p style={{backgroundColor: "green", color: "yellow"}}>
        This paragraph has a green background and yellow text. 
        It is an example of using the style attribute to apply 
        inline styles directly to an HTML element.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements 
          of the same name, e.g., P, we can refer to a specific element
          by its ID.
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel.
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph is styled by its own ID selector with a
          teal background and white text.
        </p>
        <p id="wd-id-selector-3">
          This paragraph has a different ID and a different look and feel
          than the previous two paragraphs. It demonstrates how ID selectors
          can be used to apply unique styles to specific elements on a page.
        </p>
        
        <div id="wd-css-class-selectors">
          <h3>Class selectors</h3>
          <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an
            element&apos;s CLASS attribute
          </p>
          <h4 className="wd-class-selector">
            This heading has the same style as paragraph above
          </h4>
          <p className="wd-ai-class-selector">
            This sample paragraph uses the wd-ai-class-selector class to
            apply a dark slate background and light cyan text.
          </p>
          <h4 className="wd-ai-class-selector">
            This sample heading shares the same wd-ai-class-selector style
          </h4>

          <div id="wd-your-class-selectors">
            <h3>My class selectors</h3>
            <p className="wd-your-class">
              This paragraph uses a custom class selector to apply a gold
              background and purple text.
            </p>
            <h4 className="wd-your-class">
              This heading also uses the same custom class selector to
              apply the same gold background and purple text as the paragraph above.
            </h4>
            
            <div id="wd-css-document-structure">
              <div className="wd-selector-1">
                <h3>Document structure selectors</h3>
                <div className="wd-selector-2">
                  Selectors can be combined to refer elements in particular
                  places in the document
                  <p className="wd-selector-3">
                    This paragraph&apos;s red background is referenced as
                    <br />
                    .selector-2 .selector3
                    <br />
                    meaing the descendant of some ancestor.
                    <br />
                    <span className="wd-selector-4">
                      Whereas this span is a direct child of its parent
                    </span>
                    <br />
                    <span className="wd-ai-selector-5">
                      This sample span is a descendant of .wd-selector-1,
                      styled with a descendant selector.
                    </span>
                    <br />
                    You can combine these relationships to create specific
                    styles depending on the document structure.
                    <br />
                    <span className="wd-your-selector">
                      This span is a direct child of its parent and has a
                      custom class selector from me applied to it, which gives it a
                      unique style.
                    </span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div id="wd-css-cascade">
        <h3>Cascade and specificity</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          This sample paragraph matches a tag, a class, and an ID rule. The
          ID selector is the most specific, so its red background wins.
        </p>
      </div>

      <ForegroundColors />
      
    </div>
  );
}
export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers collapse line breaks and extra white space in the source, so
        plain text runs together. The p tag is a block element that browsers
        give a default top and bottom margin, which creates the vertical gap
        between paragraphs.
      </p>
      <p id="wd-p-my-1">
        I am from Williamsburg, Virginia and have lived in multiple states.
        These states include Virginia, Florida, Pennsylvania, New Hampshire, 
        and Massachusetts.
      </p>
      <p id="wd-p-my-2">
        I hope to gain a deeper understanding of how to build web applications
        in this course. Especially with using AI as a tool to help and assist 
        its construction and not building it entirely.
      </p>
    </div>
  );
}
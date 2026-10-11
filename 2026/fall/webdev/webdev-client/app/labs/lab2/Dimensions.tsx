export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sentence keeps going well past the edges of its fixed
          120 by 60 pixel yellow box, so the declared width and height are
          easy to see.
        </div>
        <div className="wd-dimension-tall-rect wd-bg-color-green">Long Rectangle</div> 
      </div>
    </div>
  );
}
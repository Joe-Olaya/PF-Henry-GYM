import React from "react";

import videoDemo from "../../assets/videoDemo.mp4";
import "./videoIntro.css";

const Intro = () => {
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={videoDemo}
        type="video/mp4"
        loop
        controls={true}
      />
    </div>
  );
};

export default Intro;

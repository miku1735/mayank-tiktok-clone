import React, { useRef, useState } from "react";
import VideoSidebar from "./videoSidebar/VideoSidebar";
import VideoFooter from "./videoFooter/VideoFooter";
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const videopress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="Video">
      <video
        // autoPlay
        onClick={videopress}
        ref={videoRef}
        loop
        class="Video__player"
        playsinline=""
        poster="https://scontent-maa2-1.cdninstagram.com/v/t51.2885-15/e35/118791128_425357668439994_2306008947788077319_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&amp;_nc_cat=1&amp;_nc_ohc=cW9xJffhJDwAX_xsBrK&amp;oh=332b699b7bd35292e0b5dbb5437a2808&amp;oe=5F55EB7B"
        preload="none"
        src="https://scontent-maa2-1.cdninstagram.com/v/t50.2886-16/118909117_746606709403402_1619668498393146080_n.mp4?_nc_ht=scontent-maa2-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=NH_F3FjIGiAAX_y3BX8&amp;oe=5F55DA90&amp;oh=6addbb6012490238421ff6ced34c9c3c"
        type="video/mp4"
      ></video>
    </div>
  );
}

export default Video;

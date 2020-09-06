import React from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar() {
  const [liked, setLiked] = React.useState(100);

  return (
    <div className="VideoSidebar">
      <div className="VideoSidebar__button">
        <FavoriteBorderIcon
          fontSize="large"
          onClick={() => {
            setLiked(liked + 1);
          }}
        />
        <p>{liked}</p>
      </div>
      <div className="VideoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>250</p>
      </div>
      <div className="VideoSidebar__button">
        <ShareIcon fontSise="large" />
        <p>400</p>
      </div>
    </div>
  );
}

export default VideoSidebar;

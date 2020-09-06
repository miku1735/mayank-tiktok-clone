import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@mayank</h3>
        <p>this is some description</p>
        <div className="VideoFooter_ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth" className>
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;

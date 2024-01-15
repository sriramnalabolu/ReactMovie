import React from "react";

function Video() {
  const iframeStyle = {
    border: "0px #ffffff none",
    // add other styles as needed
  };

  return (
    <div>
      <h1>Bhagavanth Kesari</h1>
      <iframe
        style={iframeStyle}
        width="1570"
        height="600"
        src="https://maxhd.icu/Boys%20Hostel%20(2023)%20720p%20HD%20-%20Bolly2Tolly.city.mp4"
        scrolling="no"
        frameborder="1"
        allowfullscreen=""
      ></iframe>
    </div>
  );
}

export default Video;

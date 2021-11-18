import React from "react";
import background from "../../images/background.png";

function ResultImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain" /* <------ */,
        backgroundRepeat: "no-repeat",
        // width: "100%",
        minHeight: "100vh",
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 428 1262"
        xmlSpace="preserve"
      >
        <g id="레이어_3" fill="#B2D182">
          <rect x="-5" y="389.6" width="439.5" height="878.4" />
        </g>
        <g id="레이어_2" fill="#AFDBF3">
          <rect x="-5" y="-2.1" width="439.5" height="409.7" />
        </g>
        <g id="레이어_4" fill="#AFDBF3">
          <g>
            <path
              d="M316.9,671.9c-70.1,7.1-131.7,41.4-204.7,65.3C39.1,761-5,755.6-5,755.6v91.5c0,0,127.3-21.4,185.9-44.6
			c50.7-20.1,107.4-54.1,190.4-70.1c35.2-6.7,53.7-16.6,63.3-25.7v-66.2C417,649,376.4,665.8,316.9,671.9z"
            />
          </g>
        </g>
        <g id="레이어_5" fill="#AFDBF3">
          <g>
            <path
              d="M297,1177.4c0,0-110.1-6.3-197.7-88.1c-59-55.1-90.4-66.8-104.4-68.6v86.8c16.8,7.9,52.7,28.4,78.4,68.5
			c34.6,54,111.1,92.4,111.1,92.4l250-2.6v-26.3C394.8,1194.3,297,1177.4,297,1177.4z"
            />
            <path d="M452.6,1257.6C452.4,1255.6,450.6,1252.3,452.6,1257.6L452.6,1257.6z" />
          </g>
        </g>
        <image
          //the href links itself to the public folder
          href="/images/otter1.png" //this is the public folder
          x="100"
          y="100"
          width="100"
          height="100"
        />
      </svg>
    </div>
  );
}

export default ResultImage;

import React, { Dispatch, SetStateAction } from "react";
import { userInfo } from "./Game";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameStart({ userInfo, setUserInfo }: props) {
  return (
    <div className="global_container">
      <div className="global_mobile_container">
        <div>this is start page</div>
        <button
          onClick={() => {
            setUserInfo({ ...userInfo, stage: 0 });
          }}
        >
          Go to next
        </button>
      </div>
    </div>
  );
}

export default GameStart;

import React, { Dispatch, SetStateAction, useState } from "react";

import { userInfo } from "./Game";
import "../../styles/GameHome.css";

import background_home from "../background/background_home.png";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameHome({ userInfo, setUserInfo }: props) {
  const [warning, setWarning] = useState<string>("10자 이내로 적어주세요!");
  return (
    <div className="global_container">
      <div
        className="global_mobile_container"
        style={{
          backgroundImage: `url(${background_home})`,
        }}
      >
        <div className="game_first_sentence">
          <div> 쓰레기 소비패턴을 분석하여 당신의 도움이 </div>
          <div> 가장 필요한 숲속 친구를 찾아드릴게요. </div>
        </div>
        <div className="game_please">
          <div> 먼저 숲속 친구의 </div>
          <div> 이름을 지어주세요!</div>
        </div>
        <div className="game_home_input_container">
          <div className="game_your_name">
            <input
              placeholder={userInfo.name}
              onChange={(e) => {
                setUserInfo({ ...userInfo, name: e.target.value });
              }}
            ></input>

            <div className="game_warning">{warning}</div>
          </div>

          <button
            onClick={() => {
              if (userInfo.name.length > 10) {
                setWarning("닉네임이 너무 깁니다! 10자 이내로 적어주세요");
              } else {
                setUserInfo({ ...userInfo, stage: 1 });
              }
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameHome;

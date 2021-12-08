import React, { Dispatch, SetStateAction } from "react";
import { userInfo } from "./Game";

import "../../styles/GameStart.css";

import background_start from "../background/background_start.png";
import background_start_animals from "../background/background_start_animals.png";
import background_start_title from "../background/background_start_title.png";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameStart({ userInfo, setUserInfo }: props) {
  return (
    <div className="global_container">
      <div
        className="global_mobile_container"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url(${background_start})`,
        }}
      >
        <div className="game_start_container">
          <div className="game_start_title_image_container">
            <img
              className="game_start_title_image"
              src={background_start_title}
            />
          </div>

          <div className="game_start_text">
            <div>사회적 기업 다숲과 함께하는</div>
            <div>제로웨이스트 프로젝트</div>
          </div>

          <img className="game_start_image" src={background_start_animals} />

          <div className="game_start_button_container_container">
            <div className="game_start_button_container">
              <div className="game_start_button_behind"></div>
              <button
                className="game_start_button"
                onClick={() => {
                  setUserInfo({ ...userInfo, stage: 0 });
                }}
              >
                친구 찾으러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStart;

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { questions } from "../../Data";
import GameHome from "./GameHome";
import GameQuestions from "./GameQuestions";
import "../../styles/Game.css";
export interface userInfo {
  stage: 0 | 1 | 2;
  questionNumber: number;
  name: string;
}

function Game({}: RouteComponentProps) {
  const [userInfo, setUserInfo] = useState<userInfo>({
    stage: 0,
    name: "입력해주세요",
    questionNumber: 0,
  });

  return (
    <div className="game_container">
      {userInfo.stage === 0 ? (
        <GameHome userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : userInfo.stage === 1 ? (
        <GameQuestions userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Game;

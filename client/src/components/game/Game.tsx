import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { questions } from "../../Data";
import GameHome from "./GameHome";
import GameQuestions from "./GameQuestions";

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
  const [warning, setWarning] = useState<string>("10자 이내로 적어주세요");

  return (
    <div>
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

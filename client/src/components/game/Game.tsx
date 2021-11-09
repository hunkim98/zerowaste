import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { questions } from "../../Data";
import GameHome from "./GameHome";
import GameQuestions from "./GameQuestions";
import "../../styles/Game.css";

interface userWasteInfo {}
export interface userInfo {
  stage: 0 | 1 | 2;
  questionNumber: number;
  name: string;
  wasteInfo: number[];
  choice: number[];
}

function Game({}: RouteComponentProps) {
  const [userInfo, setUserInfo] = useState<userInfo>({
    stage: 0,
    name: "입력해주세요",
    questionNumber: 0,
    wasteInfo: [0, 0, 0, 0, 0, 0],
    choice: [],
    //we have 6 waste types, initialize by 6 empty number array
    //index 0: plastic
    //index 1: styrofoam
    //index 2: articles
    //index 3: microplastic
    //index 4: vinyl
    //index 5: paper
  });

  return (
    <>
      {userInfo.stage === 0 ? (
        <GameHome userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : userInfo.stage === 1 ? (
        <GameQuestions userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Game;

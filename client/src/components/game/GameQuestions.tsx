import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { questions } from "../../Data";
import { userInfo } from "./Game";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameQuestions({ userInfo, setUserInfo }: props) {
  const history = useHistory();
  return (
    <div>
      <div>{questions[userInfo.questionNumber].question}</div>
      {questions[userInfo.questionNumber].options.map((option) => {
        return (
          <div
            onClick={() => {
              if (userInfo.questionNumber + 1 === questions.length) {
                history.push("/result/" + "2");
              } else {
                setUserInfo({
                  ...userInfo,
                  questionNumber: userInfo.questionNumber + 1,
                });
              }
            }}
          >
            {option.choice}
          </div>
        );
      })}
    </div>
  );
}

export default GameQuestions;

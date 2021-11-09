import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { optionsDTO, questions, wasteArray } from "../../Data";
import { userInfo } from "./Game";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameQuestions({ userInfo, setUserInfo }: props) {
  const history = useHistory();
  const handleOptionClick = (questionOption: optionsDTO) => {
    if (userInfo.questionNumber + 1 === questions.length) {
      history.push("/result/" + "2");
    } else {
      const tempArray = JSON.parse(JSON.stringify(userInfo.wasteInfo));
      const tempObject = questionOption.effectOnWaste;
      for (const [key, value] of Object.entries(tempObject)) {
        //deep copy userInfo.wasteInfo
        const wasteIndex = wasteArray.findIndex((element) => element === key);
        if (wasteIndex !== -1) {
          //-1 means that the specified element does not exist
          tempArray[wasteIndex] += value;
          // += Object.values(tempObject);
          console.log(tempArray);
        }
      }
      setUserInfo({
        ...userInfo,
        questionNumber: userInfo.questionNumber + 1,
        wasteInfo: tempArray,
      });
    }
  };
  return (
    <div className="global_container">
      <div className="global_mobile_container">
        <div className="game_question_container">
          <div>{questions[userInfo.questionNumber].question}</div>
          {questions[userInfo.questionNumber].options.map((option) => {
            return (
              <div
                key={option.choice}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option.choice}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameQuestions;

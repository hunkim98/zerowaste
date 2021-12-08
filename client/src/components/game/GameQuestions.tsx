import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { optionsDTO, questions, wasteArray } from "../../Data";
import { userInfo } from "./Game";
import "../../styles/GameQuestions.css";

import background_question_pink from "../background/background_question_pink.png";
import background_question_yellow from "../background/background_question_yellow.png";
import background_question_violet from "../background/background_question_violet.png";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

const timeout = 1500;
function GameQuestions({ userInfo, setUserInfo }: props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleOptionClick = async (
    questionOption: optionsDTO,
    optionIndex: number
  ) => {
    if (userInfo.questionNumber + 1 === questions.length) {
      //now it is time to send data to server
      setIsLoading(true);
      const maximumValue = Math.max(...userInfo.wasteInfo);
      const maximumIndexes: number[] = [];
      let animalType: number = 0;
      userInfo.wasteInfo.map((element, index) => {
        if (element === maximumValue) {
          maximumIndexes.push(index);
        }
      });
      if (maximumIndexes.length === 1) {
        animalType = maximumIndexes[0];
      } else {
        animalType =
          maximumIndexes[Math.floor(Math.random() * maximumIndexes.length)];
      }
      await axios({
        method: "POST",
        url: "/users",
        data: {
          username: userInfo.name,
          createdAt: new Date(),
          animalType: animalType,
          animalIndex: Math.floor(Math.random() * 3) + 1,
          //we have a total of 4 variances in animal
          choice: userInfo.choice,
        },
      })
        .then((res) => {
          history.push(`/result/${res.data.data}`);
          // console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //the user is still taking the test
      const tempArray = JSON.parse(JSON.stringify(userInfo.wasteInfo));
      const tempChoice = JSON.parse(JSON.stringify(userInfo.choice));
      const tempObject = questionOption.effectOnWaste;
      tempChoice[userInfo.questionNumber - 1] = optionIndex;
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
        choice: tempChoice,
      });
    }
  };
  return (
    <div className="global_container">
      <div
        className="global_mobile_container"
        style={{
          backgroundImage:
            userInfo.questionNumber < 3
              ? `url(${background_question_pink})`
              : userInfo.questionNumber < 6
              ? `url(${background_question_yellow})`
              : `url(${background_question_violet})`,
        }}
      >
        <div className="game_question_container">
          <div className="game_question_container_sub01">
            <div className="game_question_toptext">
              내 도움이 가장 필요한 친구 찾기
            </div>
            <div className="game_question_navigator_container">
              <div className="game_question_navigator_background"></div>
              <div
                className="game_question_navigator_state"
                style={{
                  width: `${
                    (userInfo.questionNumber / questions.length) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="game_question_questiontext_container">
              <div className="game_question_questiontext_number">
                {userInfo.questionNumber + 1}
              </div>
              <div className="game_question_questiontext_body">
                {questions[userInfo.questionNumber].question}
              </div>
            </div>
          </div>
          <div className="game_question_container_sub02">
            <div className="game_question_options_container">
              {questions[userInfo.questionNumber].options.map(
                (option, index) => {
                  return (
                    <div className="game_question_options_button_container">
                      <div
                        className="game_question_options_behind"
                        style={{
                          backgroundColor:
                            userInfo.questionNumber < 3
                              ? "#7CD6C5"
                              : userInfo.questionNumber < 6
                              ? "#67B54C"
                              : "#FFDB7E",
                        }}
                      ></div>
                      <div
                        className="game_question_options_button"
                        style={{
                          backgroundColor:
                            userInfo.questionNumber < 3
                              ? "#C5ECE5"
                              : userInfo.questionNumber < 6
                              ? "#A5C379"
                              : "#FBF3C9",
                        }}
                        key={option.choice}
                        onClick={() => {
                          if (!isLoading) {
                            handleOptionClick(option, index);
                          }
                        }}
                      >
                        {option.choice}
                      </div>
                    </div>
                  );
                }
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameQuestions;

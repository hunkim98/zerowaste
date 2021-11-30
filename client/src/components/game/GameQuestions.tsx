import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { optionsDTO, questions, wasteArray } from "../../Data";
import { userInfo } from "./Game";
import "../../styles/GameQuestions.css";

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
          setTimeout(() => {
            history.push(`/result/${res.data.data}`);
            setIsLoading(false);
          }, timeout);
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
          backgroundColor:
            userInfo.questionNumber < 4
              ? "#FFDAC5"
              : userInfo.questionNumber < 8
              ? "#FBF3C9"
              : "#E9D0F2",
        }}
      >
        <div className="game_question_container">
          <div>{questions[userInfo.questionNumber].question}</div>
          {questions[userInfo.questionNumber].options.map((option, index) => {
            return (
              <div
                key={option.choice}
                onClick={() => {
                  if (!isLoading) {
                    handleOptionClick(option, index);
                  }
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

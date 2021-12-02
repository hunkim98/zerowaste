import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../styles/Result.css";
import { ResultData } from "./ResultData";
import ResultImage from "./ResultImage";
import Loading from "./Loading";

import background_loading from "../background/background_loading.png";
import background_question_yellow from "../background/background_question_yellow.png";
import background_question_pink from "../background/background_question_pink.png";
import background_question_violet from "../background/background_question_violet.png";

const timeout = 2000;
export interface resultResponse {
  animalIndex: number;
  animalType: number;
  username: string;
  _id: string;
}

function Result({}: RouteComponentProps) {
  let { id } = useParams<{ id: string | undefined }>();
  const [resultResponse, setResultResponse] = useState<resultResponse>();
  const [dataForImage, setDataForImage] = useState<resultResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      axios({
        method: "GET",
        url: "/users",
        params: { id: id, limit: 14 },
      }).then((res) => {
        console.log(res);
        console.log(res.data.data.animalIndex);
        console.log(ResultData[Number(res.data.animalIndex)]);
        const myResult: resultResponse = {
          animalIndex: Number(res.data.data.animalIndex),
          animalType: Number(res.data.data.animalType),
          username: res.data.data.username,
          _id: res.data.data._id,
        };
        console.log("myResult", myResult);
        setResultResponse({
          animalIndex: Number(res.data.data.animalIndex),
          animalType: Number(res.data.data.animalType),
          username: res.data.data.username,
          _id: res.data.data._id,
        });

        setDataForImage(
          res.data.othersData.map((X: resultResponse) => {
            return {
              animalIndex: X.animalIndex,
              animalType: X.animalType,
              username: X.username,
              _id: X._id,
            };
          })
        );
        setTimeout(() => {
          setIsLoading(false);
        }, timeout);
      });
    }
  }, [id]);

  return (
    <div className="global_container">
      <div
        className="global_mobile_container"
        style={{
          //이미지 사용할겨면 public folder 안에 background 폴더 만들어서 사용
          //1.위에서 import 하기("../background/이미지 이름(영어로 작성하기)")
          //2.inline style(예시 아래처럼)
          backgroundImage: isLoading
            ? `url(${background_loading})`
            : `url(${background_question_yellow})`,
        }}
      >
        {resultResponse !== undefined &&
        dataForImage !== undefined &&
        !isLoading ? (
          <>
            <div className="result_container">
              <div className="result_resultvalue_container">
                <div className="result_resultvalue_backgroundshape"></div>
                <div className="result_resultvalue_ballon">
                  <div className="result_resultvalue_text_container">
                    <div className="result_resultvalue_text_fixed">
                      당신의 도움을 바라는 친구는
                    </div>
                    <div className="result_resultvalue_text_value">
                      {ResultData[resultResponse.animalType].name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="result_image_container">
                <div className="result_image_shadow"></div>
                <img
                  className="result_image_animal"
                  src={`/images/${
                    ResultData[resultResponse.animalType].englishName
                  }(${resultResponse.animalIndex}).png`}
                />
              </div>
              <div className="result_textbox_container">
                <div className="result_textbox_maintext_container">
                  <div className="result_textbox_maintext_01">@@쓰레기를</div>
                  <div className="result_textbox_maintext_02">
                    가장 많이 배출한 당신!
                  </div>
                </div>
                {ResultData[resultResponse.animalIndex].explanation.map((X) => {
                  return <div className="result_textbox_subtext">{X}</div>;
                })}
              </div>

              <div className="result_othersresult_container">
                <div className="result_othersresult_text">
                  우리 도움이 필요한 숲 속 친구들이 여기 모여있어요.
                </div>
              </div>
            </div>
            <ResultImage
              myResult={resultResponse}
              othersResult={dataForImage}
            />
            <div className="result_dasup_container">
              <div className="result_dasup_text">
                이렇게 숲의 모습을 되찾기 위해 사회적 기업 <b>다숲</b>은 어떤
                일들을 하고 있을까요?
              </div>
              <div className="result_dasup_button">
                사회적 기업 <b>다숲</b> 더 알아보러 가기
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Result;

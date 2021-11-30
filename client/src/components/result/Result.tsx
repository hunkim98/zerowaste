import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../styles/Result.css";
import { ResultData } from "./ResultData";
import ResultImage from "./ResultImage";
import otter from "./images/otter(1).png";
import Loading from "./Loading";
import { url } from "inspector";
import background1 from "../background/background1.jpg";
import background2 from "../background/background2.jpg";

const timeout = 1500;
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
            ? `url(${background1})`
            : `url(${background2})`,
        }}
      >
        {resultResponse !== undefined &&
        dataForImage !== undefined &&
        !isLoading ? (
          <>
            <div className="result_container">
              <div>THIS IS RESULT</div>
              <div>{ResultData[resultResponse.animalType].name}</div>
              <img
                src={`/images/${
                  ResultData[resultResponse.animalType].englishName
                }(${resultResponse.animalIndex}).png`}
              />
              <div>
                {ResultData[resultResponse.animalIndex].explanation.map((X) => {
                  return <div>{X}</div>;
                })}
              </div>
            </div>
            <ResultImage
              myResult={resultResponse}
              othersResult={dataForImage}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Result;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../styles/Result.css";
import { ResultData } from "./ResultData";
import ResultImage from "./ResultImage";
import otter from "./images/otter(1).png";

export interface resultResponse {
  animalIndex: number;
  animalType: number;
}

function Result({}: RouteComponentProps) {
  let { id } = useParams<{ id: string | undefined }>();
  const [resultResponse, setResultResponse] = useState<resultResponse>();
  const [dataForImage, setDataForImage] = useState<resultResponse[]>();
  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      axios({ method: "GET", url: "/users", params: { id: id } }).then(
        (res) => {
          console.log(res);
          console.log(res.data.data.animalIndex);
          console.log(ResultData[Number(res.data.animalIndex)]);
          const myResult: resultResponse = {
            animalIndex: Number(res.data.data.animalIndex),
            animalType: Number(res.data.data.animalType),
          };
          setResultResponse({
            animalIndex: Number(res.data.data.animalIndex),
            animalType: Number(res.data.data.animalType),
          });

          setDataForImage(
            res.data.othersData.map((X: resultResponse) => {
              return { animalIndex: X.animalIndex, animalType: X.animalType };
            })
          );
        }
      );
    }
  }, [id]);

  return (
    <div className="global_container">
      <div className="global_mobile_container">
        {resultResponse !== undefined && (
          <div className="result_container">
            <div>THIS IS RESULT</div>
            <div>{ResultData[resultResponse.animalIndex].name}</div>
            <img src={otter} />
            <div>
              {ResultData[resultResponse.animalIndex].explanation.map((X) => {
                return <div>{X}</div>;
              })}
            </div>
          </div>
        )}
        {resultResponse !== undefined && dataForImage !== undefined && (
          <ResultImage myResult={resultResponse} othersResult={dataForImage} />
        )}
      </div>
    </div>
  );
}

export default Result;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../styles/Result.css";
import { ResultData } from "./ResultData";
import ResultImage from "./ResultImage";
import otter from "./images/otter(1).png";

interface resultResponse {
  animalIndex: number;
  animalType: number;
}

function Result({}: RouteComponentProps) {
  let { id } = useParams<{ id: string | undefined }>();
  const [resultResponse, setResultResponse] = useState<resultResponse>();
  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      axios({ method: "GET", url: "/users", params: { id: id } }).then(
        (res) => {
          console.log(res.data.data.animalIndex);
          console.log(ResultData[Number(res.data.data.animalIndex)]);
          setResultResponse({
            animalIndex: Number(res.data.data.animalIndex),
            animalType: Number(res.data.data.animalType),
          });
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
        <ResultImage />
      </div>
    </div>
  );
}

export default Result;

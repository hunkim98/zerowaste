import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import "../../styles/Result.css";
import { ResultData } from "./ResultData";
import ResultImage from "./ResultImage";
import Loading from "./Loading";

import background_loading from "../background/background_loading.png";
import background_question_yellow from "../background/background_question_yellow.png";
import background_question_pink from "../background/background_question_pink.png";
import background_question_violet from "../background/background_question_violet.png";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const timeout = 2000;
export interface resultResponse {
  animalIndex: number;
  animalType: number;
  username: string;
  _id: string;
}

function Result({}: RouteComponentProps) {
  const history = useHistory();
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
          //????????? ??????????????? public folder ?????? background ?????? ???????????? ??????
          //1.????????? import ??????("../background/????????? ??????(????????? ????????????)")
          //2.inline style(?????? ????????????)
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
                      ????????? ????????? ????????? ?????????
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
                <div
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "black",
                    zIndex: 5,
                    position: "absolute",
                    bottom: -30,
                  }}
                >
                  {resultResponse.username}
                </div>
              </div>
              <div className="result_textbox_container">
                <div className="result_textbox_maintext_container">
                  <div className="result_textbox_maintext_01">
                    {ResultData[resultResponse.animalType].wasteTypeKorean}{" "}
                    ????????????
                  </div>
                  <div className="result_textbox_maintext_02">
                    ?????? ?????? ????????? ??????!
                  </div>
                </div>
                {ResultData[resultResponse.animalType].explanation.map((X) => {
                  return <div className="result_textbox_subtext">{X}</div>;
                })}
              </div>
              <LinkPreview
                margin="20px"
                className=""
                //temporary empty
                url={ResultData[resultResponse.animalType].link}
              />

              <div className="result_othersresult_container">
                <div className="result_othersresult_backgroundshape"></div>
                <div className="result_othersresult_ballon">
                  <div className="result_othersresult_text_container">
                    <div className="result_othersresult_text">
                      ?????? ????????? ????????? ??? ???
                    </div>
                    <div className="result_othersresult_text">
                      ???????????? ?????? ???????????????.
                    </div>
                  </div>
                </div>

                <ResultImage
                  myResult={resultResponse}
                  othersResult={dataForImage}
                />
              </div>

              <div className="result_dasup_container">
                <div className="result_dasup_text_container">
                  <div className="result_dasup_text">
                    ????????? ?????? ????????? ????????? ?????? ?????????
                  </div>
                  <div className="result_dasup_text">
                    ?????? <b>??????</b>??? ?????? ????????? ?????? ?????????????
                  </div>
                </div>
                <div className="result_dasup_dasupbtn_container">
                  <div className="result_dasup_dasupbtn_behind"></div>
                  <div
                    className="result_dasup_dasupbtn_btn"
                    onClick={() => {
                      history.push("/about");
                    }}
                  >
                    ????????? ?????? <b>??????</b> ??? ???????????? ??????
                  </div>
                </div>
              </div>
              <div className="result_home_container">
                <div className="result_home_text">
                  ??? ????????? ????????? ???????????? ?????????????
                </div>
                <div className="result_home_homebtn_container">
                  <div className="result_home_homebtn_behind"></div>
                  <button
                    className="result_home_homebtn_btn"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    ?????? ????????? ??????
                  </button>
                </div>
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { icePackDTO } from "../../../dto/common.dto";
import Infographic from "./Infographic";

import "../../styles/About.css";

import about_activity_01 from "../background/about_activity_01.png";
import about_activity_02 from "../background/about_activity_02.png";
import about_activity_03 from "../background/about_activity_03.png";
import about_icepack_01 from "../background/about_icepack_01.png";
import about_icepack_02 from "../background/about_icepack_02.png";
import about_icepack_03 from "../background/about_icepack_03.png";
import background_white from "../background/background_white.png";

function About({}: RouteComponentProps) {
  const history = useHistory();
  const [icePackInfo, setIcePackInfo] = useState<icePackDTO>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   axios({ method: "GET", url: "/icePack" }).then((res) => {
  //     console.log(res.data.data[0]);
  //     setIcePackInfo(res.data.data[0]);
  //   });
  // }, []);
  return (
    <div className="global_container">
      <div className="global_mobile_container">
        <div
          className="about_container"
          style={{ backgroundImage: `url(${background_white})` }}
        >
          <div className="about_topic_container">
            <div className="about_topic_backgroundshape"></div>
            <div className="about_topic_ballon">
              <div className="about_topic_text_container">
                <div className="about_topic_text01">ABOUT</div>
                <div className="about_topic_text02">' 다 숲 '</div>
              </div>
            </div>
          </div>

          <div className="about_text_container_01">
            <div className="about_text_big">다숲은</div>
            <div className="about_text">
              다양한 동식물들의 터전이자 보금자리가 되어줄 수 있는 건강한 숲을
              되찾기 위해 설립된 사회적 기업입니다.
            </div>
          </div>
          <div className="about_activityimg_container">
            <div className="about_activityimg_container_container">
              <img className="about_icepack_01" src={about_activity_01}></img>
              <img className="about_icepack_02" src={about_activity_02}></img>
              <img className="about_icepack_03" src={about_activity_03}></img>
            </div>
          </div>
          <div className="about_text_container_02">
            <div className="about_text">
              최근 신선배송 수요가 늘어나면서 급격히 사용량이 많아진 젤형
              아이스팩이 미세 플라스틱으로 가득 차있다는 사실을 알고 계셨나요?
              이렇게 버려지는 미세 플라스틱은 크기가 매우 작아 바다와 강으로
              그대로 유입되게 되고, 대기를 통해 확산되어 환경에 치명적인 문제를
              끼치고 있답니다. 해양 생물은 물론이고 육지 동물들, 심지어 식물의
              발육까지에도 부정적인 영향을 미치고 있다고 해요.
            </div>
            <div className="about_text">
              이에 다숲은 2018년 환경사업을 시작으로 아이스팩 자원순환 캠페인을
              활성화시켰고, 학교, 마을 시민단체의 협업을 이끌어낼 수 있었습니다.
              이후 2021년인 지금, 관악구 아이스팩 재사용 자원순환 사업자로
              선정되었는데요. 10월까지 폐아이스팩 약 20,000개를 순환시키는 데에
              성공하여, 약 20톤 분량의 아이스팩을 재사용할 수 있었다고 해요.
            </div>
          </div>

          <div className="about_icepackimg_container">
            <div className="about_activityimg_container_container">
              <img className="about_icepack_01" src={about_icepack_01}></img>
              <img className="about_icepack_02" src={about_icepack_02}></img>
              <img className="about_icepack_03" src={about_icepack_03}></img>
            </div>
          </div>
          <div className="about_visitdasup_container">
            <div className="about_visitdasup_text">
              이렇게 <b> 다숲</b>은 자연, 환경, 사람의 미래를 만들어나가기 위해
              지속 가능한 자원순환을 꿈꾸고 있습니다.
              <b> 다숲</b>이 더 궁금하신가요?
            </div>

            <div className="about_dasup_dasupbtn_container">
              <div className="about_dasup_dasupbtn_behind"></div>
              <button
                className="about_dasup_dasupbtn_btn"
                onClick={() => window.open("http://dasoop.net", "_blank")}
              >
                <b>다숲</b> 더 알아보기
              </button>
            </div>
          </div>

          <div className="about_home_container">
            <div className="about_home_text">
              도움이 필요한 다른 동물도 만나고 싶다면
            </div>

            <div className="about_home_homebtn_container">
              <div className="about_home_homebtn_behind"></div>
              <button
                className="about_home_homebtn_btn"
                onClick={() => {
                  history.push("/");
                }}
              >
                게임 홈으로 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

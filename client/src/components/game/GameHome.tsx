import React, { Dispatch, SetStateAction, useState } from "react";
import { userInfo } from "./Game";

interface props {
  userInfo: userInfo;
  setUserInfo: Dispatch<SetStateAction<userInfo>>;
}

function GameHome({ userInfo, setUserInfo }: props) {
  const [warning, setWarning] = useState<string>("10자 이내로 적어주세요");
  return (
    <div>
      {" "}
      <div>성함을 입력해주세요</div>
      <input
        placeholder={userInfo.name}
        onChange={(e) => {
          setUserInfo({ ...userInfo, name: e.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          if (userInfo.name.length > 10) {
            setWarning("닉네임이 너무 깁니다! 10자 이내로 적어주세요");
          } else {
            setUserInfo({ ...userInfo, stage: 1 });
          }
        }}
      >
        입력
      </button>
      <div>{warning}</div>
    </div>
  );
}

export default GameHome;

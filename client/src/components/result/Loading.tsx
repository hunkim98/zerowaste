import { url } from "inspector";
import React from "react";
import "../../styles/Loading.css";

function Loading() {
  return (
    <div className="loading_container">
      <div className="loading_text01">도움이 필요한 친구 찾는 중</div>
      <div className="loading_text02">...</div>
    </div>
  );
}

export default Loading;

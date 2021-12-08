import { url } from "inspector";
import React from "react";
import "../../styles/Loading.css";

function Loading() {
  return (
    <div className="loading_container">
      <div className="loading_text">도움이 필요한</div>
      <div className="loading_text">친구 찾는 중</div>
      <div className="loading_text">...</div>
    </div>
  );
}

export default Loading;

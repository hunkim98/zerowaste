import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "../../styles/Result.css";

function Result({}: RouteComponentProps) {
  let { id } = useParams<{ id: string | undefined }>();

  return (
    <div className="global_container">
      <div className="global_mobile_container">
        <div className="result_container">THIS IS RESULT</div>
      </div>
    </div>
  );
}

export default Result;

import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

function Result({}: RouteComponentProps) {
  let { id } = useParams<{ id: string | undefined }>();

  return <div>THIS IS RESULT</div>;
}

export default Result;

import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

interface userInfo {
  stage: 0 | 1 | 2;
  name: string;
}

function Game({}: RouteComponentProps) {
  const [userInfo, setUserInfo] = useState<userInfo>({ stage: 0, name: "" });
  return <div>Game!</div>;
}

export default Game;

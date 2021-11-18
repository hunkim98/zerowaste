import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { icePackDTO } from "../../../dto/common.dto";
import Infographic from "./Infographic";

function About({}: RouteComponentProps) {
  const [icePackInfo, setIcePackInfo] = useState<icePackDTO>();
  useEffect(() => {
    axios({ method: "GET", url: "/icePack" }).then((res) => {
      console.log(res.data.data[0]);
      setIcePackInfo(res.data.data[0]);
    });
  }, []);
  return (
    <div className="global_container">
      <div className="global_mobile_container">
        <div>
          <div>About</div>
          <div>This is eungi</div>
          <div>{String(icePackInfo?.createdAt).slice(0, 10)}</div>
          <div>{icePackInfo?.totalRecycle}</div>
          <div>{icePackInfo?.totalGather}</div>
          <Infographic icePackInfo={icePackInfo} />
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { icePackDTO } from "../../../dto/common.dto";

interface props {
  icePackInfo: icePackDTO | undefined;
}
function Infographic({ icePackInfo }: props) {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div>Infographic</div>
      <div>{String(icePackInfo?.createdAt).slice(0, 10)}</div>
      <div>{icePackInfo?.totalRecycle}</div>
      <div>{icePackInfo?.totalGather}</div>
    </div>
  );
}

export default Infographic;

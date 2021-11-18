import React from "react";
import { icePackDTO } from "../../../dto/common.dto";

interface props {
  icePackInfo: icePackDTO | undefined;
}
function Infographic({ icePackInfo }: props) {
  return (
    <div>
      <div>Infographic</div>
    </div>
  );
}

export default Infographic;

const imageRootPath = "../../../public/images/";

export interface ResultDTO {
  name: string;
  explanation: string[];
  imagePath: string;
  wasteType: string;
}

export const ResultData: ResultDTO[] = [
  {
    //this animal is related to styrofoam
    name: "수달",
    wasteType: "styrofoam",
    imagePath: imageRootPath + "otter(1).png",
    explanation: [
      "최근 강 근처에 사는 수달들의 배설물에서 스티로폼이 자주 발견되고 있어요. 가볍고 딱딱하지 않으니 먹을 수 있는 것으로 착각을 하기 때문이죠. 또한, 수달의 서식지 일부가 이러한 쓰레기와 배출수로 인해 인해 수질이 불량한 것으로 조사되고 있어 시민단체가 개선 대책을 촉구하고 있다고 해요.",
      "스티로폼은 가볍지만 부피를 많이 차지하고, 재활용하는 과정이 간단하지 않아 처리가 어렵답니다.",
      "멸종 위기종인 수달의 서식지를 지키기 위해, 배달이나 포장이 많아지는 요즈음 과대포장을 지양하고 스티로폼 사용을 줄이려는 노력이 필요해요.",
    ],
  },
];

export interface ResultDTO {
  name: string;
  englishName: string;
  explanation: string[];
  image: string;
  wasteType: string;
  wasteTypeKorean: string;
  size: number;
  link: string;
}

export const ResultData: ResultDTO[] = [
  {
    name: "다람쥐",
    englishName: "squirrel",
    wasteType: "plastic",
    wasteTypeKorean: "플라스틱",
    image: "",
    explanation: [
      "다람쥐는 보통 나뭇가지나 마른 이파리를 모아서 둥지를 만드는데, 플라스틱 쓰레기가 넘쳐나면서 나뭇가지 대신 플라스틱으로 둥지를 짓기 시작하는 다람쥐가 부쩍 늘었다고 해요.",
      "특히, 버려진 플라스틱 조각은 다람쥐나 청설모와 같은 소동물들의 몸에 상처를 내기 쉬워요.",
      "플라스틱 쓰레기를 더 이상 생산하지 않기 위해서는, 일상에서 일회용 컵 등의 사용을 최대한 줄이고 텀블러나 머그컵과 같은 다회용 제품을 사용하려고 노력해보는 것이 중요해요.",
    ],
    link: "https://www.newspenguin.com/news/articleView.html?idxno=1209",
    size: 100,
  },
  {
    //this animal is related to styrofoam
    name: "수달",
    englishName: "otter",
    wasteType: "styrofoam",
    wasteTypeKorean: "스티로품",
    image: "",
    explanation: [
      "최근 강 근처에 사는 수달들의 배설물에서 스티로폼이 자주 발견되고 있어요. 가볍고 딱딱하지 않으니 먹을 수 있는 것으로 착각을 하기 때문이죠. 또한, 수달의 서식지 일부가 이러한 쓰레기와 배출수로 인해 인해 수질이 불량한 것으로 조사되고 있어 시민단체가 개선 대책을 촉구하고 있다고 해요.",
      "스티로폼은 가볍지만 부피를 많이 차지하고, 재활용하는 과정이 간단하지 않아 처리가 어렵답니다.",
      "멸종 위기종인 수달의 서식지를 지키기 위해, 배달이나 포장이 많아지는 요즈음 과대포장을 지양하고 스티로폼 사용을 줄이려는 노력이 필요해요.",
    ],
    link: "https://www.joongang.co.kr/article/23964380#home",
    size: 100,
  },

  {
    name: "금개구리",
    englishName: "goldenFrog",
    wasteType: "articles",
    wasteTypeKorean: "병/캔 폐품",
    image: "",
    explanation: [
      "금개구리는 전 세계를 통틀어 우리나라에서만 사는 희귀종인데다 멸종위기종 2급으로 지정되어 있는 동물이예요.",
      "깨끗한 환경에서만 살 수 있는 동물이기 때문에 환경의 깨끗한 정도를 나타내는 지표종이라고 알려져 있지만, 최근 서식지 인근에 널린 병, 폐품 쓰레기들로 인해 서식지의 이동 범위가 좁아져 개체 수가 점점 줄어들고 있다고 해요.",
      "병을 분리수거할 때는 안쪽까지 깨끗이 세척한 다음 병뚜껑과 분리해 따로 배출하는 것이 좋고, 보증금 환불이 가능한 보증금병은 꼭 마트 등에 반납하여 적혀있는 금액의 보증급을 환급받고 재사용이 가능하도록 해요.",
    ],
    link: "https://imnews.imbc.com/replay/2013/nwdesk/article/3346630_30357.html",
    size: 90,
  },
  {
    name: "당근밭(당근)",
    englishName: "carrot",
    wasteType: "microplastic",
    wasteTypeKorean: "미세플라스틱",
    image: "",
    explanation: [
      "우리 식탁에 오르는, 땅에서 재배되는 음식들이 점점 미세 플라스틱에 노출되고 있어요. 과일 중에서는 사과, 채소 중에서는 당근에서 가장 많이 검출되고 있다고 해요.",
      "미세플라스틱은 땅 속에서 물과 함께 식물 뿌리에 흡수된 뒤, 식물 내 물질이동 통로를 통해 실 줄기와 잎, 열매로 이동하여 영향을 끼친답니다.",
      "최근 신선배송 수요가 늘어나면서 급격히 사용량이 많아진 젤형 아이스팩이 미세 플라스틱으로 가득 차있다는 사실을 알고 계셨나요? 때문에 사용 후에는 꼭 ‘아이스팩 전용 수거함’에 넣어 재사용이 가능하도록 하는 것이 좋아요.",
    ],
    link: "https://www.hani.co.kr/arti/science/future/952907.html",
    size: 110,
  },
  {
    name: "황새",
    englishName: "stork",
    wasteType: "vinyl",
    wasteTypeKorean: "비닐",
    image: "",
    explanation: [
      "하천 및 해양오염 탓에, 황새를 포함한 바다새들이 비닐을 먹이로 착각하는 경우가 다수 있다고 해요. 찢어서 새끼를 먹이기도 하고, 비닐봉지를 뒤집어 쓴 채로 날개를 펴지 못하고 있는 상황이 목격되고 있기도 한답니다.",
      "비닐 쓰레기의 경우, 돌고래나 바다거북의 뱃속에서도 발견되는 등 플라스틱 쓰레기와 더불어 해양 생물들에게도 막대한 피해를 끼치고 있어요.",
      "하루에도 무수하게 버려지는 비닐 포장 대신, 재사용이 가능한 장바구니나 에코백을 적극 활용해봐요.",
    ],
    link: "https://www.animalplanet.co.kr/contents/?artNo=16751",
    size: 120,
  },
  {
    name: "나무",
    englishName: "tree",
    wasteType: "paper",
    wasteTypeKorean: "종이",
    image: "",
    explanation: [
      "종이는 자연(나무)에서 비롯한 친환경 소재라는 인식이 깔려있지만, 벌목으로 인해 사라지고 있는 숲의 절반 가량은 펄프와 종이 생산에 사용된다고 해요.",
      "특히 종이컵의 경우, 우리나라에서 사용되는 종이컵을 생산하는 데 한 해 베어내는 나무만 1,500그루에 이르고 생산 과정에서 약 13만 2,000톤의 이상화탄소가 배출된다고 해요. 또, 종이컵의 안쪽은 비닐로 코팅되어 있어 일반 종이의 30배가 넘는 환경오염 물질을 쏟아낸답니다.",
      "이외에도 라면 용기, 우유 팩 등 다양한 종이 재질 일회용 용기는 사용 후 재활용이 가능하도록 깨끗이 씻고 말려 배출하려는 노력이 필요해요.",
    ],
    link: "https://www.korea.kr/news/policyNewsView.do?newsId=148760195",
    size: 140,
  },
];

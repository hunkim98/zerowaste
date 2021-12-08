interface questionDTO {
  question: string;
  options: optionsDTO[];
}

export interface optionsDTO {
  choice: string;
  effectOnWaste: wasteEffects;
  //example of effectOnWaste: [waste.plastic, waste.plastic, waste.vinyl, waste.paper] = [0,0,1,2]
}

export interface wasteEffects {
  plastic?: number;
  styrofoam?: number;
  articles?: number;
  microplastic?: number;
  vinyl?: number;
  paper?: number;
}

export const wasteArray = [
  "plastic",
  "styrofoam",
  "articles",
  "microplastic",
  "vinyl",
  "paper",
];

// export enum waste { //enum is for typescript(does not exist in javascript)
//   //store waste result in an array
//   plastic = 0,
//   styrofoam = 1,
//   articles = 2,
//   microplastic = 3,
//   vinyl = 4,
//   paper = 5,
// }

//get the length of enum(enum is actually an object)
// const keys = Object.keys(waste);
// const wasteLength = keys.length; //this will be the amount of waste types we have

export const questions: questionDTO[] = [
  {
    question: "하루의 시작, 나는 오늘 _______로 세수했다.",
    options: [
      {
        choice: "물",
        effectOnWaste: {},
      },
      {
        choice: "비누",
        effectOnWaste: { vinyl: 6, paper: 5 },
      },
      {
        choice: "물티슈",
        effectOnWaste: { vinyl: 5, microplastic: 45 },
      },
      {
        choice: "폼클렌저",
        effectOnWaste: { plastic: 8 },
      },
    ],
  },
  {
    question: "꼬르륵... 배고파... 나는 출출할 때 주로 ___________.",
    options: [
      {
        choice: "배달음식을 시킨다",
        effectOnWaste: { vinyl: 6, plastic: 9 },
      },
      {
        choice: "간편조리식품(햇반, 컵라면, 김밥 등)을 먹는다",
        effectOnWaste: { vinyl: 5, paper: 3, plastic: 9 },
      },
      {
        choice: "밀키트 등으로 간단하게 조리한다",
        effectOnWaste: { vinyl: 6, plastic: 9 },
      },
      {
        choice: "직접 요리해먹는다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "외출하는 길에 보니 택배가 와있다! 요즘 배송받는 물건들의 포장에는 _______가 가장 많다.",
    options: [
      {
        choice: "아이스팩",
        effectOnWaste: { microplastic: 30 },
      },
      {
        choice: "종이상자",
        effectOnWaste: { paper: 4 },
      },
      {
        choice: "비닐",
        effectOnWaste: { vinyl: 8 },
      },
      {
        choice: "아이스박스",
        effectOnWaste: { styrofoam: 48 },
      },
    ],
  },
  {
    question:
      "날씨 탓에 물을 많이 마시는 요즘, 나는 밖에서 물을 마실 때, __________. ",
    options: [
      {
        choice: "생수를 사 마신다",
        effectOnWaste: { plastic: 8 },
      },
      {
        choice: "생수병을 재사용한다 ",
        effectOnWaste: { plastic: 6 },
      },
      {
        choice: "종이컵을 사용한다",
        effectOnWaste: { paper: 4 },
      },
      {
        choice: "개인 물병에 마신다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "잠깐 들른 카페, 테이크아웃으로 주문할 때 나는 주로 _______를 마신다.",
    options: [
      {
        choice: "따뜻한 음료",
        effectOnWaste: { paper: 4 },
      },
      {
        choice: "에이드나 아이스아메리카노",
        effectOnWaste: { plastic: 8 },
      },
      {
        choice: "병에 든 탄산음료",
        effectOnWaste: { articles: 24 },
      },
      {
        choice: "(사실 별로 안 마신다)",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "마트에 왔다. 식품코너에서 나는 _______을 가장 자주 구매한다.",
    options: [
      {
        choice: "참치, 꽁치 통조림",
        effectOnWaste: { articles: 21 },
      },
      {
        choice: "햄, 닭가슴살 통조림",
        effectOnWaste: { articles: 21 },
      },
      {
        choice: "카레, 짜장 등 레토르트 소스류",
        effectOnWaste: { vinyl: 5 },
      },
      {
        choice: "간편조리 국, 찌개류",
        effectOnWaste: { vinyl: 5 },
      },
    ],
  },
  {
    question:
      "저기 라면코너도 보인다! 내가 가장 자주 먹는 라면은 ____ _______이다.",
    options: [
      {
        choice: "봉지 국물라면",
        effectOnWaste: { vinyl: 6 },
      },
      {
        choice: "봉지 볶음라면",
        effectOnWaste: { vinyl: 6 },
      },
      {
        choice: "국물 있는 컵라면",
        effectOnWaste: { styrofoam: 41 },
      },
      {
        choice: "볶음 컵라면",
        effectOnWaste: { paper: 5 },
      },
    ],
  },
  {
    question:
      "카운터에서 물건 계산하는 중... 나는 계산이 끝난 물건들을 주섬주섬 _______.",
    options: [
      {
        choice: "비닐봉투에 담는다",
        effectOnWaste: { vinyl: 4 },
      },
      {
        choice: "장바구니에 담는다",
        effectOnWaste: {},
      },
      {
        choice: "종이봉투에 담는다",
        effectOnWaste: { paper: 4 },
      },
      {
        choice: "손에 들고 간다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "할 일이 산더미... 밤을 샌 다음날 나는 편의점에서 __________.",
    options: [
      {
        choice: "레*불, 몬스* 고카페인 에너지 드링크를 산다",
        effectOnWaste: { articles: 7 },
      },
      {
        choice: "캔커피를 산다",
        effectOnWaste: { articles: 7 },
      },
      {
        choice: "박*스같은 비타민 음료를 산다",
        effectOnWaste: { articles: 7 },
      },
      {
        choice: "카페인 없이 버틴다(졸기도 한다)",
        effectOnWaste: {},
      },
    ],
  },
];

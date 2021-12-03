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
    question: "하루의 시작, 나는 오늘 ________로 세수했다.",
    options: [
      {
        choice: "물",
        effectOnWaste: { vinyl: 18, paper: 12 },
      },
      {
        choice: "비누",
        effectOnWaste: { vinyl: 18, paper: 22 },
      },
      {
        choice: "물티슈",
        effectOnWaste: { vinyl: 8, microplastic: 22 },
      },
      {
        choice: "폼클렌저",
        effectOnWaste: { plastic: 28 },
      },
    ],
  },
  {
    question: "꼬르륵... 배고파... 나는 출출할 때 주로 ___________.",
    options: [
      {
        choice: "배달음식을 시킨다",
        effectOnWaste: { vinyl: 18, paper: 12 },
      },
      {
        choice: "간편조리식품(햇반, 컵라면, 김밥 등)을 먹는다",
        effectOnWaste: { vinyl: 7, paper: 7, plastic: 7 },
      },
      {
        choice: "밀키트 등으로 간단하게 조리한다",
        effectOnWaste: { vinyl: 13, plastic: 17 },
      },
      {
        choice: "직접 요리해먹는다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "외출하는 길에 보니 택배가 와있다! 요즘 배송받는 물건들의 포장에는 _________가 가장 많다.",
    options: [
      {
        choice: "아이스팩",
        effectOnWaste: { microplastic: 40 },
      },
      {
        choice: "종이상자",
        effectOnWaste: { paper: 29 },
      },
      {
        choice: "비닐",
        effectOnWaste: { vinyl: 29 },
      },
      {
        choice: "아이스박스",
        effectOnWaste: { styrofoam: 32 },
      },
    ],
  },
  {
    question:
      "요즘은 날씨 탓에 물을 많이 마시게 된다. 나는 밖에서 물을 마실 때, __________. ",
    options: [
      {
        choice: "생수를 사 마신다",
        effectOnWaste: { plastic: 31 },
      },
      {
        choice: "생수병을 재사용한다 ",
        effectOnWaste: { plastic: 16 },
      },
      {
        choice: "종이컵",
        effectOnWaste: { paper: 31 },
      },
      {
        choice: "개인 물병에 마신다 ",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "잠깐 화장실을 들렀다. 나는 화장실에서 손을 씻으면 보통 ___________.",
    options: [
      {
        choice: "자연건조 시킨다",
        effectOnWaste: {},
      },
      {
        choice: "옷에 닦는다",
        effectOnWaste: {},
      },
      {
        choice: "티슈에 닦는다",
        effectOnWaste: { paper: 6 },
      },
      {
        choice: "손 건조기에 말린다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "시간이 떠서 잠깐 들어온 카페. 테이크아웃으로 주문할 때 나는 주로 _______를 마신다.",
    options: [
      {
        choice: "따뜻한 커피",
        effectOnWaste: { paper: 17 },
      },
      {
        choice: "에이드나 아이스아메리카노",
        effectOnWaste: { plastic: 17 },
      },
      {
        choice: "병에 든 탄산음료",
        effectOnWaste: { articles: 17 },
      },
      {
        choice: "(사실 별로 안 마신다)",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "집 가는 길에 들른 마트. 저기 라면코너가 보인다. 내가 가장 자주 먹는 라면은_____이다.",
    options: [
      {
        choice: "봉지 국물라면",
        effectOnWaste: { vinyl: 13 },
      },
      {
        choice: "봉지 볶음라면",
        effectOnWaste: { vinyl: 13 },
      },
      {
        choice: "국물 있는 컵라면",
        effectOnWaste: { styrofoam: 17 },
      },
      {
        choice: "볶음 컵라면",
        effectOnWaste: { paper: 17 },
      },
    ],
  },
  {
    question:
      "카운터에서 물건 계산하는 중... 나는 계산이 끝난 물건들을 주섬주섬 ________.",
    options: [
      {
        choice: "비닐봉투에 담는다",
        effectOnWaste: { vinyl: 9 },
      },
      {
        choice: "장바구니에 담는다",
        effectOnWaste: {},
      },
      {
        choice: "종이봉투에 담는다",
        effectOnWaste: { paper: 9 },
      },
      {
        choice: "손에 들고 간다",
        effectOnWaste: {},
      },
    ],
  },
  {
    question:
      "할 일이 산더미... 결국 몇 시간 못 잤다. 밤을 샌 다음날 나는 __________.",
    options: [
      {
        choice: "레*불, 몬스* 고카페인 에너지 음료를 마신다",
        effectOnWaste: { articles: 21 },
      },
      {
        choice: "정석으로 샷추가 한 커피를 마신다 ",
        effectOnWaste: { plastic: 21 },
      },
      {
        choice: "박*스같은 비타민 음료를 마신다",
        effectOnWaste: { articles: 21 },
      },
      {
        choice: "카페인 없이 버틴다(졸기도 한다)",
        effectOnWaste: {},
      },
    ],
  },
];

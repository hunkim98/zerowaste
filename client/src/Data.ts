interface questionDTO {
  question: string;
  options: optionsDTO[];
}

interface optionsDTO {
  choice: string;
  effectOnWaste: number[];
  //example of effectOnWaste: [waste.plastic, waste.plastic, waste.vinyl, waste.paper] = [0,0,1,2]
}

export enum waste { //enum is for typescript(does not exist in javascript)
  //store waste result in an array
  plastic = 0,
  vinyl = 1,
  paper = 2,
  rubber = 3,
  metal = 4,
  glass = 5,
}

//get the length of enum(enum is actually an object)
const keys = Object.keys(waste);
const wasteLength = keys.length; //this will be the amount of waste types we have

export const questions: questionDTO[] = [
  {
    question: "오늘 아침에 어떤 방법으로 세수하셨나요?",
    options: [
      {
        choice: "비누로 세수했다",
        effectOnWaste: [waste.vinyl, waste.vinyl, waste.paper],
      },
      {
        choice: "핸드워시로 세수했다",
        effectOnWaste: [waste.plastic, waste.plastic, waste.plastic],
      },
      {
        choice: "물티슈로 했다",
        effectOnWaste: [waste.vinyl, waste.paper, waste.paper],
      },
    ],
  },
];

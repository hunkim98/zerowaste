import React, { useEffect, useState } from "react";
import background from "../../images/background.png";
import { resultResponse } from "./Result";
import { ResultData } from "./ResultData";
import { shuffle } from "./Shuffle";

interface props {
  myResult: resultResponse;
  othersResult: resultResponse[];
}

interface location {
  x: number;
  y: number;
  upperLimit: boolean;
  lowerLimit: boolean;
}

const skyLocationArray: location[] = [
  { x: 150, y: 60, upperLimit: false, lowerLimit: false },
  { x: 220, y: 200, upperLimit: false, lowerLimit: false },
];

interface resultImageLocation extends resultResponse {
  x: number;
  y: number;
}

function ResultImage({ myResult, othersResult }: props) {
  const LocationArray: location[] = [
    //first row
    { x: 25, y: 360, upperLimit: true, lowerLimit: false },
    { x: 140, y: 360, upperLimit: true, lowerLimit: false },
    { x: 280, y: 360, upperLimit: true, lowerLimit: true },
    //2nd row
    { x: 45, y: 490, upperLimit: false, lowerLimit: false },
    { x: 160, y: 540, upperLimit: false, lowerLimit: false },
    { x: 280, y: 510, upperLimit: false, lowerLimit: true },
    { x: 15, y: 600, upperLimit: false, lowerLimit: true },
    //top right river
    { x: 290, y: 690, upperLimit: true, lowerLimit: true },
    //along the river two
    { x: 15, y: 810, upperLimit: true, lowerLimit: false },
    { x: 170, y: 750, upperLimit: false, lowerLimit: true },
    //inner first row
    { x: 300, y: 860, upperLimit: false, lowerLimit: true },
    { x: 60, y: 920, upperLimit: false, lowerLimit: false },
    { x: 150, y: 1000, upperLimit: false, lowerLimit: false },
    //bottom right
    { x: 300, y: 1030, upperLimit: true, lowerLimit: false },
    //island
    { x: 0, y: 1110, upperLimit: true, lowerLimit: false },
  ];
  const [flyingStorksArray, setFlyingStorksArray] = useState<resultResponse[]>(
    []
  );
  const [groundAnimalsArray, setGroundAnimalsArray] = useState<
    resultResponse[]
  >([]);
  const [flyingStorksLocations, setFlyingStorksLocations] = useState<
    resultImageLocation[]
  >([]);
  const [groundAnimalsLocations, setGroundAnimalsLocations] = useState<
    resultImageLocation[]
  >([]);

  const [locationPrepared, setLoactionPrepared] = useState<boolean>(false);
  useEffect(() => {
    // console.log(
    //   `/images/${ResultData[myResult.animalType].englishName}(${
    //     myResult.animalIndex
    //   }).png`
    // );

    const tempResults = othersResult.concat(myResult);
    console.log(tempResults);
    const groundAnimals = tempResults.filter(
      (X) => !(X.animalIndex === 2 && X.animalType === 4)
    );
    const flyingStorks = tempResults.filter(
      (X) => X.animalIndex === 2 && X.animalType === 4
    );
    if (flyingStorks.length > 2) {
      const userStorkData: resultResponse[] = [];
      flyingStorks.filter(
        //find the data same with the user data
        (X) =>
          X?.username === myResult.username &&
          X.animalIndex === myResult.animalIndex &&
          X.animalType === myResult.animalType
      );
      if (userStorkData.length !== 0) {
        //there exists a user data in the userStorkData
        const finalData = userStorkData;
        finalData.push(flyingStorks[0]);
        setFlyingStorksArray(finalData);
      } else {
        const finalData = flyingStorks.filter((X, index) => index < 2);
        setFlyingStorksArray(finalData);
      }
    } else {
      setFlyingStorksArray(flyingStorks);
    }

    const shuffledGroundAnimals = shuffle(groundAnimals);
    setGroundAnimalsArray(shuffledGroundAnimals);
  }, [myResult, othersResult]);

  useEffect(() => {
    const count = flyingStorksArray.length;
    const finalLocation: location[] = [];
    if (count < 2) {
      const randomIndex = Math.floor(Math.random() * 1); //either 1 or 0
      finalLocation.push(skyLocationArray[randomIndex]);
      // setFlyingStorksLocations(finalLocation);
    }
  }, [flyingStorksArray]);

  useEffect(() => {
    let countDifference = LocationArray.length - groundAnimalsArray.length;
    console.log(countDifference);
    while (countDifference > 0) {
      console.log("hi");
      const indexToDelete = Math.floor(Math.random() * LocationArray.length);
      LocationArray.splice(indexToDelete, 1); //remove one item at the indexToDelete
      countDifference = LocationArray.length - groundAnimalsArray.length;
    }
    setGroundAnimalsLocations(
      groundAnimalsArray.map((X, index) => {
        return {
          animalIndex: X.animalIndex,
          animalType: X.animalType,
          username: X.username,
          x: LocationArray[index].x,
          y: LocationArray[index].y,
          _id: X._id,
        };
      })
    );
    // setGroundAnimalsLocations(LocationArray);
  }, [groundAnimalsArray]);

  useEffect(() => {
    console.log("hey", groundAnimalsLocations);
  }, [flyingStorksArray, groundAnimalsLocations]);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain" /* <------ */,
        backgroundRepeat: "no-repeat",
        // width: "100%",
        minHeight: "100vh",
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 428 1262"
        xmlSpace="preserve"
      >
        <g id="레이어_3" fill="#B2D182">
          {/* this is sky */}
          <rect x="-5" y="389.6" width="439.5" height="878.4" />
        </g>
        <g id="레이어_2" fill="#AFDBF3">
          <rect x="-5" y="-2.1" width="439.5" height="409.7" />
        </g>
        <g id="레이어_4" fill="#AFDBF3">
          <g>
            <path
              d="M316.9,671.9c-70.1,7.1-131.7,41.4-204.7,65.3C39.1,761-5,755.6-5,755.6v91.5c0,0,127.3-21.4,185.9-44.6
			c50.7-20.1,107.4-54.1,190.4-70.1c35.2-6.7,53.7-16.6,63.3-25.7v-66.2C417,649,376.4,665.8,316.9,671.9z"
            />
          </g>
        </g>
        <g id="레이어_5" fill="#AFDBF3">
          <g>
            <path
              d="M297,1177.4c0,0-110.1-6.3-197.7-88.1c-59-55.1-90.4-66.8-104.4-68.6v86.8c16.8,7.9,52.7,28.4,78.4,68.5
			c34.6,54,111.1,92.4,111.1,92.4l250-2.6v-26.3C394.8,1194.3,297,1177.4,297,1177.4z"
            />
            <path d="M452.6,1257.6C452.4,1255.6,450.6,1252.3,452.6,1257.6L452.6,1257.6z" />
          </g>
        </g>

        {groundAnimalsLocations.length !== 0 &&
          groundAnimalsLocations.map((X, index) => {
            {
              return (
                <g key={index}>
                  <image
                    x={X.x}
                    y={X.y}
                    width={`${ResultData[X.animalType].size}`}
                    height={`${ResultData[X.animalType].size}`}
                    href={`/images/${ResultData[X.animalType].englishName}(${
                      X.animalIndex
                    }).png`} //this is the public folder
                  />
                  <text
                    x={X.x + ResultData[X.animalType].size / 2}
                    y={X.y + ResultData[X.animalType].size + 5}
                    fill="black"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    {X.username}
                  </text>
                </g>
              );
            }
          })}
        {/* <g>
          <image
            //the href links itself to the public folder
            href={`/images/${ResultData[myResult.animalType].englishName}(${
              myResult.animalIndex
            }).png`} //this is the public folder
            x="0"
            y="600"
            width={`${ResultData[myResult.animalType].size}`}
            height={`${ResultData[myResult.animalType].size}`}
          />
          <text
            x={0 + ResultData[myResult.animalType].size / 2}
            y={874.4 + ResultData[myResult.animalType].size + 15}
            fill="black"
          >
            {"이름"}
          </text>
        </g> */}
      </svg>
    </div>
  );
}

export default ResultImage;

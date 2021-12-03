import { url } from "inspector";
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

interface resultImageLocation extends resultResponse {
  x: number;
  y: number;
}

function ResultImage({ myResult, othersResult }: props) {
  const skyLocationArray: location[] = [
    { x: 120, y: 120, upperLimit: false, lowerLimit: false },
    { x: 220, y: 200, upperLimit: false, lowerLimit: false },
  ];
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
  const [shuffled, setShuffled] = useState<boolean>(false);

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
  }, [myResult, othersResult, shuffled]);

  useEffect(() => {
    setFlyingStorksLocations(
      flyingStorksArray.map((X, index) => {
        return {
          animalIndex: X.animalIndex,
          animalType: X.animalType,
          username: X.username,
          x: skyLocationArray[index].x,
          y: skyLocationArray[index].y,
          _id: X._id,
        };
      })
    );
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
        width: "100%",
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
        enableBackground="new 0 0 428 1262"
        xmlSpace="preserve"
      >
        <style type="text/css">
          {/* .st0{fill:url(#SVGID_1_);}
	.st1{fill:#6aa349;}
	.st2{fill:#9BF4F9;}
	.st3{fill:#828282;}
	.st4{fill:#C4C4C4;}
	.st5{fill:#AAAAAA;}
	.st6{fill:#D3F2F1;fill-opacity:0.88;}
	.st7{fill:#E6F4F4;}
	.st8{opacity:0.44;}
	.st9{fill:#63C13D;}
	.st10{display:none;}
	.st11{display:inline;opacity:0.11;}
	.st12{opacity:0.11;} */}
        </style>

        <g id="레이어_1"></g>
        <g id="레이어_2">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="214.7645"
            y1="408"
            x2="214.7645"
            y2="-2.1196"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0" stopColor="#B4FBFF" />
            <stop offset="0.6083" stopColor="#8EDFFD" />
            <stop offset="0.9993" stopColor="#74CCFC" />
          </linearGradient>
          <rect
            x="-5"
            y="-2.1"
            width="439.5"
            height="410.1"
            fill="url(#SVGID_1_)"
          />
        </g>
        <g id="레이어_8"></g>
        <g id="레이어_3">
          <rect x="-5" y="407.5" fill="#A8F779" width="439.5" height="860.5" />
        </g>
        <g id="레이어_6"></g>
        <g id="레이어_4">
          <g>
            <path
              fill="#9BF4F9"
              d="M316.9,671.9c-70.1,7.1-131.7,41.4-204.7,65.3C39.1,761-5,755.6-5,755.6v91.5c0,0,127.3-21.4,185.9-44.6
			c50.7-20.1,107.4-54.1,190.4-70.1c35.2-6.7,53.7-16.6,63.3-25.7v-66.2C417,649,376.4,665.8,316.9,671.9z"
            />
          </g>
        </g>
        <g id="레이어_5">
          <g>
            <path
              fill="#9BF4F9"
              d="M297,1177.4c0,0-110.1-6.3-197.7-88.1c-59-55.1-90.4-66.8-104.4-68.6v86.8c16.8,7.9,52.7,28.4,78.4,68.5
			c34.6,54,111.1,92.4,111.1,92.4l250-2.6v-26.3C394.8,1194.3,297,1177.4,297,1177.4z"
            />
            <path
              fill="#9BF4F9"
              d="M452.6,1257.6C452.4,1255.6,450.6,1252.3,452.6,1257.6L452.6,1257.6z"
            />
          </g>
          <path
            fill="#C4C4C4"
            d="M88.8,726.4c0,0-9.1,0-11,11.8C76,750.1,89.4,750.5,95,750.2c5.6-0.4,11.5-2.1,14.5-3c3.4-1,6.7-3.7,7.1-6.3
		c0.4-2.6-1.6-10.1-7.6-13C102.6,724.7,88.8,726.4,88.8,726.4z"
          />
          <path
            fill="#C4C4C4"
            d="M114.1,737c0,0-6.6,0-7.9,8.6c-1.4,8.6,8.4,8.9,12.4,8.6c4-0.3,8.3-1.5,10.5-2.2c2.5-0.7,4.9-2.7,5.1-4.6
		s-1.1-7.3-5.5-9.4C124.1,735.8,114.1,737,114.1,737z"
          />
          <path
            fill="#C4C4C4"
            d="M305.3,732.8c-6.7-0.7-18.7,14.7-18.7,14.7s-3.7,4.4-0.3,14.7c2.4,7.3,4.3,6.7,15.6,6.7
		c11.3,0,14.7,2.7,20.7-1.3s18.7-2,17.3-13.3c-1.3-11.3-10.7-18-13.3-20C324,732.2,305.3,732.8,305.3,732.8z"
          />
          <path
            fill="#AAAAAA"
            d="M255.8,1147.5c0,0-12.4-0.7-16,16.3c-3.6,17.2,14.7,18.9,22.4,18.8s15.9-2.2,20.1-3.2
		c4.8-1.1,9.5-4.9,10.2-8.7c0.7-3.8-1.3-14.9-9.2-19.6C274.8,1146.2,255.8,1147.5,255.8,1147.5z"
          />
          <g>
            <path
              fill="#D3F2F1"
              fillOpacity="0.88"
              d="M144.6,141.3c19.6,6.9,35,7.9,35.5,4.8s-0.5-2.1-9.5-7.4c-9-5.3-32.9-12.2-50.3-21.7
			c-17.5-9.5-46.6-17.5-62.5-27C48,84.1,17.4,77.5-5,73.2V114C45.8,122.3,131,136.5,144.6,141.3z"
            />
            <path
              fill="#E6F4F4"
              d="M400.7,143.8l-7.9-3.5l-84-28.3c0,0,3.9-12-20.5-37.4c-23.2-24.2-44.5-10.6-44.5-10.6s-8.8-19.5-22.6-26.8
			c-22.6-12-48.8-5.7-48.8-5.7s4.8-13.8,2.5-21.5c-1.7-5.7-3.5-10.2-5.3-13.9H-5v56c42.2,13.3,136.3,42.3,217.9,63.3
			c102.6,26.4,183,38.7,189.2,37.6C414.8,150.8,400.7,143.8,400.7,143.8z"
            />
          </g>
          <g opacity="0.44">
            <path
              fill="#63C13D"
              d="M359.8,351.3c-6.8-1.1-40.8,28.2-40.8,28.2s-50.1-51-68-56.5c-16.3-5-95.3,64.5-118.3,84.5h275.5
			C398.5,394.9,365.6,352.2,359.8,351.3z"
            />
          </g>
        </g>
        <g id="레이어_7" display="none">
          <g display="inline" opacity="0.11">
            <defs>
              <rect
                id="SVGID_2_"
                x="-5"
                y="-2"
                opacity="0.11"
                width="440"
                height="1270"
              />
            </defs>
          </g>
        </g>
        {flyingStorksLocations.length !== 0 &&
          flyingStorksLocations.map((X, index) => {
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
          })}

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
      </svg>
      {/* <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 428 1262"
        xmlSpace="preserve"
      >
        <g id="레이어_3" fill="#B2D182">
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
        {flyingStorksLocations.length !== 0 &&
          flyingStorksLocations.map((X, index) => {
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
          })}

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
      </svg> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          setShuffled(!shuffled);
        }}
      >
        새로고침
      </div>
    </div>
  );
}

export default ResultImage;

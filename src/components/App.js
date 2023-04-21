import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  function showCitiesFromState(state){
    console.log(state)
    setCityVisible(...cityVisible,[state.name]?false:true)
  }
  function showTownsFromCity(city){
    console.log(city)
    setTownVisible(...townVisible,[city.name]?false:true)
  }
  const initialValForState={}
  states.map((state)=>{
    let x=state.name.cities.name;               //how to do this
    initialValForCity.x=false
  }
  )
  const initialValForCity={}
  states.map((state)=>{
    let x=state.name;               //how to do this
    initialValForState.x=false
  }
  )
  console.log(initialValForState)
  const[cityVisible,setCityVisible]=useState(initialValForState)
  const[townVisible,setTownVisible]=useState(initialValFOrCity);
  return <div id="main">
    <ul>
      {states.map((state,i)=>(
      <li key={"states"+(i+1)} 
      id={"states"+(i+1)} 
      onClick={()=>showCitiesFromState(state)}>
        {state.name}
      
      <ul>
        {cityVisible[state.name] && state.cities.map((city,i)=>(
          <li key={"cities"+i+1} id={"cities"+i+1} onClick={showTownsFromCity(city)}
          >{city.name}
            <ul>
              {townVisible[city.name] && city.towns.map((town,i)=>(
                <li key={"towns"+i+1} id={"towns"+i+1}>
                  {town.name}
                </li>
              ))}

            </ul>
          </li>
        ))
        }
      </ul>
      
      </li>))}
      
    </ul>
  </div>;
}

export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DrinksCard from "../../components/DrinksCard/DrinksCard";

export default function Home() {
  const [drinkData, setDrinksData] = useState([]);
  useEffect(() => {
    getDrinksData();
  }, []);

  const getDrinksData = async () => {
    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const modifyDrinks = res.data.drinks;

    setDrinksData(modifyDrinks);
  };
  console.log(drinkData);
  return (
    <div className="cardContainer">
      {drinkData.map((drinksValue, index) => {
        return <DrinksCard drinksValue={drinksValue} key={index} />;
      })}
    </div>
  );
}

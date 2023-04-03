import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const { id } = useParams();

  const [drinksDetails, setDrinksDetails] = useState([]);

  useEffect(() => {
    getDrinksDetails();
  }, []);

  const getDrinksDetails = async () => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const modifyDrinks = res.data.drinks[0];
    console.log("bbbb", modifyDrinks);
    setDrinksDetails(modifyDrinks);
  };

  console.log("aaaa", drinksDetails);

  return (
    <div className="detailsContainer">
      <h1 id="drinkTitle">{drinksDetails.strDrink}</h1>

      <img id="drinkImg" src={drinksDetails.strDrinkThumb} alt="a" />

      <div className="drinkRecipe">
        <div className="ingredient">{drinksDetails.strIngredient1 || null}</div>
        <div className="measure">{drinksDetails.strMeasure1 || null}</div>

        <div className="ingredient">{drinksDetails.strIngredient2 || null}</div>
        <div className="measure">{drinksDetails.strMeasure2 || null}</div>

        <div className="ingredient">{drinksDetails.strIngredient3 || null}</div>
        <div className="measure">{drinksDetails.strMeasure3 || null}</div>

        <div className="ingredient">{drinksDetails.strIngredient4 || null}</div>
        <div className="measure">{drinksDetails.strMeasure4 || null}</div>

        <div className="ingredient">{drinksDetails.strIngredient5 || null}</div>
        <div className="measure">{drinksDetails.strMeasure5 || null}</div>

        <div className="ingredient">{drinksDetails.strIngredient6 || null}</div>
        <div className="measure">{drinksDetails.strMeasure6 || null}</div>
      </div>
      <div className="drinkInstructions">{drinksDetails.strInstructions}</div>
    </div>
  );
}

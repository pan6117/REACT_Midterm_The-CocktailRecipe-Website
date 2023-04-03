import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./DrinksCard.css";
import { useNavigate } from "react-router-dom";

export default function DrinksCard({ drinksValue }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* <img className="pics" src={drinksValue.strDrinkThumb} alt="drinksImg" />
      <div className="drinksTitleDiv">
        Name: <span className="drinksTitle">{drinksValue.strDrink}</span>
      </div>
      <button>ClickMe</button> */}

      <Card id="singleCard" className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea
          className="card"
          onClick={() => navigate(`/details/${drinksValue.idDrink}`)}
        >
          <CardMedia
            component="img"
            height="140"
            image={drinksValue.strDrinkThumb}
            alt={drinksValue.strDrink}
          />
          <CardContent className="card">
            <Typography
              id="drinksTitle"
              gutterBottom
              variant="h5"
              component="div"
            >
              {drinksValue.strDrink}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card">
          <Button
            id="detailsButton"
            className="card"
            size="small"
            color="primary"
            onClick={() => navigate(`/details/${drinksValue.idDrink}`)}
          >
            Read Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

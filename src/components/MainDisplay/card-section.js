//import react, react state, material-ui, faker, and freelancer component
import React from "react";
import { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { faker } from "@faker-js/faker";
import Card from "./CardComponents/card";

const CardSection = ({ title }) => {
  //declare a state variable for initial cards number
  //set the initial cards number to 3
  //and create a function to update the state variable
  const defaultCardNumber = 3;
  const [cardNumber, setCardNumber] = useState(defaultCardNumber);

  //create random data for the cards
  const cardsData = () => {
    return {
      name: faker.name.firstName() + " " + faker.name.lastName(),
      description: faker.lorem.sentence(29),
      imageUrl: faker.image.imageUrl(120, 80, "cat", true, true),
      rating: (Math.random() * 5).toFixed(1),
    };
  };

  //create an array of 3 cards
  const cardItems = Array.from({ length: cardNumber }, () => cardsData());

  //create a function to show more cards
  // when the button is clicked the cardNumber state variable is updated
  const showMore = () => {
    setCardNumber(cardNumber + 3);
  };

  //create a function to show less cards
  // when the button is clicked the cardNumber state variable is updated
  const showLess = () => {
    setCardNumber(defaultCardNumber);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ marginTop: 3, fontSize: "2vw" }}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {cardItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card item={item} rating={item.rating} />
          </Grid>
        ))}
      </Grid>

      {/*create a button to show more or less cards 
      limit the number of cards to 9
      with ternary operators condition ? valueIfTrue : valueIfFalse
      allowing the button to function based on the number of card*/}
      {cardNumber < 9 ? (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" onClick={showMore}>
            Show More
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" onClick={showLess}>
            Show Less
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CardSection;

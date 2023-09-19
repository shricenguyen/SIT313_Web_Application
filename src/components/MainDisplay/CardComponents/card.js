//import react, material-ui, and star-rating component
import React from "react";
import { Box, Typography } from "@mui/material";
import StarRating from "./star-rating";

const Card = ({ item, rating }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2vw",
      }}
    >
      <Box
        component="img"
        src={item.imageUrl}
        alt="item.name"
        sx={{ width: "100%", maxHeight: "120", objectFit: "cover" }}
      />
      <Typography variant="h5" gutterBottom sx={{ alignSelf: "center" }}>
        {item.name}
      </Typography>
      <Typography variant="body2">Description: {item.description}</Typography>
      <StarRating rating={rating} />
    </Box>
  );
};

export default Card;

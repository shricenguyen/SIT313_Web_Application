//Componnet for main image
//import React from 'react' and material-ui
import React from "react";
import { Box } from "@mui/material";
import { faker } from "@faker-js/faker";

//create a functional component called MainImage
const MainImage = () => {
  //creating a random image
  const dummyImage = faker.image.imageUrl(800, 350, "rain", true);
  return (
    <Box
      component="img"
      src={dummyImage}
      alt="random image"
      sx={{ width: "100%" }}
    />
  );
};

export default MainImage;

//Component for rating
//import React from 'react' and material-ui
import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

//create a functional component called StarRating
const StarRating = ({ rating }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <StarIcon sx={{ color: "#FF9529" }} />
      <Typography variant="body2" sx={{ marginLeft: 1 }}>
        {rating}
      </Typography>
    </Box>
  );
};

export default StarRating;

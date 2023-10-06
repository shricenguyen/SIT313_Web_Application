//import react state and Material UI components
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

//create a function to handle the form submission
const SubscriptionBar = () => {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await fetch("http://localhost:2000", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    alert("Email sent successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <Box
      sx={{
        background: "#e0e0e0",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="SIGN UP FOR OUR DAILY INSIDER"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          sx={{ width: "50vw" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            p: 2,
            ml: 2,
            alignSelf: "center",
          }}
        >
          Subscribe
        </Button>
      </form>
    </Box>
  );
};

export default SubscriptionBar;

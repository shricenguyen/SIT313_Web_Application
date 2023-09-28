const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    //check if email is valid
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const msg = {
      to: email,
      from: "snakenguyen3110@gmail.com",
      subject: "Welcome to the DevLink Marketplace",
      text: "Thank you for subscribing to our newsletter!",
      html: "<strong>Thank you for subscribing to our newsletter!</strong>",
    };
    await sgMail.send(msg);
    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

function isValidEmail(email) {
  //check if email has valid format
  if (!email.includes("@")) {
    return false;
  }
  //check if email has valid domain
  const parts = email.split("@");
  const domain = parts[1];
  //check if domain has a dot
  if (!domain.includes(".")) {
    return false;
  }
  return true;
}

//start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

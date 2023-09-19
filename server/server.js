require("dotenv").config();

//requiring express
const express = require("express");
const app = express();

//using cors to allow cross origin resource sharing as we are using two different ports
const cors = require("cors");

//requiring sendgrid
const sgMail = require("@sendgrid/mail");
const port = process.env.PORT || 2892;

//using cors and express.json
app.use(cors());
app.use(express.json());

//getting the static files from the public folder
app.use(express.static(__dirname + "/public"));
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//setting the headers for the css file
app.get("/public/css/styles.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(__dirname + "/public/css/styles.css");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//setting the headers for the js file
app.get("/public/js/main.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(__dirname + "/public/js/main.js");
});

//creating a post route for the subscribe button
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  const msg = {
    to: email,
    from: "snakenguyen3110@gmail.com",
    subject: "Thank you for subscribing",
    text: "Welcome to Dev Link",
    html: "<strong>Welcome to Dev Link</strong>",
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log("Email sent: ", response[0].statusCode, response[0].headers);
      res.json({ message: "Email has been sent" });
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ message: "Error sending email" });
    });
});

//displaying the port number in the console
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

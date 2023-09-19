//import React, State, Router, and Material-UI
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import {
  auth,
  firestore,
  manualRegister,
  createUserDocument,
} from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import e from "cors";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const { name, email, password, confirmPassword } = userData;

  const handleRegister = async () => {
    // password confirmation
    //if the password and confirm password do not match, display an alert
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match");
      setAlertOpen(true);
      return;
    }

    //if the password and confirm password match, create a new user
    try {
      const { user } = await manualRegister(email, password);
      await createUserDocument(user, { displayName: name });
      setDialogOpen(true);
    } catch (error) {
      setAlertMessage(error.message);
      setAlertOpen(true);
    }
  };

  const history = useNavigate();

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "1vh" }}>
        Register
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
        value={email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        value={password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        margin="normal"
      />

      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        type="password"
        fullWidth
        value={confirmPassword}
        onChange={(e) =>
          setUserData({ ...userData, confirmPassword: e.target.value })
        }
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleRegister}
      >
        Register
      </Button>
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",

          justifyContent: "center",
        }}
      >
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login here
        </Link>
      </Typography>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
        message={alertMessage}
      />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          You have successfully registered. You will be redirected to the login
          page.
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              history("/login");
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;

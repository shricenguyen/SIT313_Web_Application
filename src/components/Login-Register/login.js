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
  signInWithGoogle,
  createUserDocument,
  manualLogin,
} from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const { email, password } = userData;

  const handleGoogleSignIn = async () => {
    const { googleUser } = await signInWithGoogle();
    createUserDocument(googleUser);
  };

  const handleEmailandPasswordSignIn = async () => {
    try {
      await manualLogin(email, password);
      setDialogOpen(true);
    } catch (error) {
      setAlertMessage(error.message);
      setAlertOpen(true);
    }
  };

  const history = useNavigate();
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          marginTop: "1vh",
        }}
      >
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleEmailandPasswordSignIn}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={() => setAlertOpen(false)}
        message={alertMessage}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleGoogleSignIn}
        sx={{ mt: 2 }}
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",

          justifyContent: "center",
        }}
      >
        Don't have an account?{" "}
        <Link to="/register" style={{ textDecoration: "none" }}>
          Sign up here
        </Link>
      </Typography>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Login Successful</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            You have successfully logged in, you will be redirected to the home
            page.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              history("/");
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;

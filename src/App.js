import NavBar from "./components/nav-bar.js";
import Footer from "./components/footer.js";
import JobForm from "./components/job-form.js";
import MainDisplay from "./components/main-display.js";
import Login from "./components/Login-Register/login.js";
import Register from "./components/Login-Register/register.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container
        sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainDisplay />} />
            <Route path="/job-form" element={<JobForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>

        <Footer />
      </Container>
    </div>
  );
}

export default App;

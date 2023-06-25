import { Paper } from "@mui/material";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
        <Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Navbar>
      </Paper>
    </Router>
  );
}

export default App;

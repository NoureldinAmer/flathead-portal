import { Paper } from "@mui/material";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
        <Navbar></Navbar>
      </Paper>
    </Router>
  );
}

export default App;

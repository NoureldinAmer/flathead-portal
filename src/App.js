import { Paper } from "@mui/material";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import NewsPage from "./pages/NewsPage";
import GrantsPage from "./pages/GrantsPage";
import { HeaderContextProvider } from "./contexts/HeaderContext";

function App() {
  return (
    <HeaderContextProvider>
      <Router>
        <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
          <Navbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/grants" element={<GrantsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Navbar>
        </Paper>
      </Router>
    </HeaderContextProvider>
  );
}

export default App;

import {
  Box,
  Container,
  CssBaseline,
  Link,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import TopSellingTable from "../components/TopSellingTable";
import { HeaderContext } from "../contexts/HeaderContext";

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Flathead Forge
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function GrantsPage() {
  const { setCurrentHeader } = useContext(HeaderContext);

  useEffect(() => {
    document.title = "Scholarships & Grants";
    setCurrentHeader("Scholarships & Grants");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <TopSellingTable />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

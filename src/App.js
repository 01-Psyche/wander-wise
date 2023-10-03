import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "DM sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
  palette: {
    primary: {
      main: "#D1F366",
    },
    secondary: {
      main: "#141627",
    },
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: "100% + 24px" }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default App;

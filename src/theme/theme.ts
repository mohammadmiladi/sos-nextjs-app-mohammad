import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#ff5722",
    },
    background: {
      default: "#f8f9fa",
    },
    text: {
      primary: "#333",
    },
  },
});

export default theme;

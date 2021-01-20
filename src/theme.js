import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default:
        "linear-gradient(90deg, rgba(182,192,197,1) 0%, rgba(17,45,96,1) 100%)",
    },
    text: {
      main: "#343a40",
      secondary: "#738083",
    },
  },
  typography: {
    fontFamily: "TRY Vesterbro",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 400,
    h3: {
      fontWeight: 400,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontSize: "1.5rem",
    },
  },
});

export default responsiveFontSizes(theme);

import { ThemeProvider, createTheme } from "@mui/material";
import ContactInfo from "./Components/ContactInfo";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";

const theme = createTheme({
  typography: {
    fontFamily: `'Lato', sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landing />
        <Projects />
        <ContactInfo />
      </div>
    </ThemeProvider>
  );
}

export default App;

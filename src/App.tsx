import { ThemeProvider, createTheme } from "@mui/material";
import ContactInfo from "./Components/ContactInfo";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import ReactFullpage from "@fullpage/react-fullpage";

const theme = createTheme({
  typography: {
    fontFamily: `'Lato', sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactFullpage
        credits={{ enabled: false }}
        scrollingSpeed={1200}
        licenseKey={process.env.REACT_APP_FULLPAGE_AUTH_TOKEN}
        sectionsColor={["#412F59", "#BDB8D9", "#9F8FBF", ]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <ContactInfo />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </ThemeProvider>
  );
}

export default App;

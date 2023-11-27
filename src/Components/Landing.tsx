import { Typography, Grow, Fade } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Landing = () => {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <Grow in={true} appear style={{ transitionDelay: "150ms" }}>
        <Typography variant="h1">Hi I'm Patrick.</Typography>
      </Grow>

      <Fade in={true} appear style={{ transitionDelay: "1250ms" }}>
        <Typography variant="h3">Software Developer.</Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "1450ms" }}>
        <Typography variant="h3">Indie Game Developer.</Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "1650ms" }}>
        <Typography variant="h3">Animal Lover.</Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "1850ms" }}>
        <Typography variant="h6" sx={{marginBottom: "10px"}}>
          Professional front end developer experienced with the
          React/TypeScript/JavaScript stack.
        </Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "2050ms" }}>
        <img
          
          width="320"
          height="320"
          src={require("../images/resumepicCropped.jpg")}
          alt={"pat"}
          style={{
            borderRadius: "101693px",
          }}
        />
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "2250ms" }}>
        <KeyboardArrowDownIcon
          sx={{
            position: "fixed",
            left: "50%",
            bottom: "10px",
            transform: "translate(-50%, -50%)",
            margin: "0 auto",
          }}
        />
      </Fade>
    </div>
  );
};

export default Landing;

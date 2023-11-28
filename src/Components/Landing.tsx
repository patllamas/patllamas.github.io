import { Typography, Grow, Fade, Tooltip, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Landing = (props: any) => {
  return (
    <div style={{ textAlign: "center", color: "white", userSelect: "none" }}>
      <Grow in={true} appear style={{ transitionDelay: "150ms" }}>
        <Typography
          sx={{
            marginBottom: "10px",
            typography: { xs: "h2", md: "h1" },
          }}
        >
          Hi, I'm Patrick.
        </Typography>
      </Grow>

      <Fade in={true} appear style={{ transitionDelay: "1200ms" }}>
        <Typography sx={{ typography: { xs: "h5", md: "h3" } }}>
          Software Developer.
        </Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "1600ms" }}>
        <Typography sx={{ typography: { xs: "h5", md: "h3" } }}>
          Indie Game Developer.
        </Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "2000ms" }}>
        <Typography
          gutterBottom
          sx={{ marginBottom: "18px", typography: { xs: "h5", md: "h3" } }}
        >
          Animal Lover.
        </Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "2400ms" }}>
        <div>
          <Typography
            variant="h6"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Cleared front-end software developer, experienced with the
            React/TypeScript/JavaScript stack.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginTop: "10px", marginBottom: "18px" }}
          >
            Based in the Washington, DC Area.
          </Typography>
        </div>
      </Fade>

      <Fade in={true} appear style={{ transitionDelay: "2600ms" }}>
        <div className={"iconRow"}>
          <Tooltip title="CSS">
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-css-96.png")}
              alt="css"
            />
          </Tooltip>
          <Tooltip title="HTML">
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-html-96.png")}
              alt="html"
            />
          </Tooltip>
          <Tooltip title="JavaScript">
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-javascript-96.png")}
              alt="javascript"
            />
          </Tooltip>
          <Tooltip title="TypeScript">
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-typescript-96.png")}
              alt="typescript"
            />
          </Tooltip>
          <Tooltip title="React JS">
            <img
              width="50"
              height="50"
              src={require("../images/icons/logo192.png")}
              alt="react"
            />
          </Tooltip>
          <Tooltip title="Python">
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-python-96.png")}
              alt="python"
            />
          </Tooltip>
          <Tooltip title="Godot Game Engine">
            <img
              width="50"
              height="50"
              src={require("../images/icons/godot.png")}
              alt="godot"
            />
          </Tooltip>
        </div>
      </Fade>
      {/* <Fade in={true} appear style={{ transitionDelay: "3100ms" }}> */}
      <Fade in={true} appear style={{ transitionDelay: "1ms" }}>
      <IconButton
        sx={{
          left: "50%",
          marginLeft: "-25px",
          position: "absolute",
          bottom: 1.5,
        }}
        onClick={props.moveDown}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: "50px",
            color: "white",
          }}
        />
      </IconButton>
      </Fade>
    </div>
  );
};

export default Landing;

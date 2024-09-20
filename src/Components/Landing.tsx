import {
  Fab,
  Typography,
  Grow,
  Fade,
  Tooltip,
  IconButton,
  Slide,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Landing = (props: any) => {
  const iconTooltip = () => {};

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

      <Fade in={true} appear style={{ transitionDelay: "1000ms" }}>
        <Typography sx={{ typography: { xs: "h5", md: "h3" } }}>
          Software Developer.
        </Typography>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "1500ms" }}>
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

      <div>
        <Fade in={true} appear style={{ transitionDelay: "2500ms" }}>
          <Typography
            variant="h6"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Cleared front-end software developer, experienced with the
            React/TypeScript/JavaScript stack.
          </Typography>
        </Fade>
        <Fade in={true} appear style={{ transitionDelay: "3000ms" }}>
          <Typography
            variant="h6"
            sx={{ marginTop: "10px", marginBottom: "18px" }}
          >
            Based in the Washington, DC Area.
          </Typography>
        </Fade>
      </div>

      <Fade in={true} appear style={{ transitionDelay: "3500ms" }}>
        <div className={"iconRow"}>
          <Tooltip title="CSS" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-css-96.png")}
              alt="css"
            />
          </Tooltip>
          <Tooltip title="HTML" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-html-96.png")}
              alt="html"
            />
          </Tooltip>
          <Tooltip title="JavaScript" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-javascript-96.png")}
              alt="javascript"
            />
          </Tooltip>
          <Tooltip title="TypeScript" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-typescript-96.png")}
              alt="typescript"
            />
          </Tooltip>
          <Tooltip title="React JS" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/logo192.png")}
              alt="react"
            />
          </Tooltip>
          <Tooltip title="Python" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/icons8-python-96.png")}
              alt="python"
            />
          </Tooltip>
          <Tooltip title="Godot Game Engine" placement="top" arrow>
            <img
              width="50"
              height="50"
              src={require("../images/icons/godot.png")}
              alt="godot"
            />
          </Tooltip>
        </div>
      </Fade>
      <Fade in={true} appear style={{ transitionDelay: "4000ms" }}>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#9f8fbf",
            "&:hover": {
              backgroundColor: "#BDB8D9",
            },
          }}
          variant="contained"
          size="large"
          onClick={props.moveToContact}
          startIcon={<ContactPageIcon />}
        >
          Contact
        </Button>
      </Fade>
      <Slide
        direction="left"
        in={true}
        appear
        style={{ transitionDelay: "5000ms" }}
      >
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
      </Slide>
    </div>
  );
};

export default Landing;

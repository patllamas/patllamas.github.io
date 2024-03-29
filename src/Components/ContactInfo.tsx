import { IconButton, Tooltip, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div style={{ textAlign: "center", color: "white", userSelect: "none" }}>
      <Typography sx={{ typography: { xs: "h2", md: "h1" } }}>
        Contact me.
      </Typography>
      <div>
        <IconButton href="https://www.linkedin.com/in/patllamas/">
          <Tooltip title="LinkedIn">
            <LinkedInIcon sx={{ color: "white", fontSize: 45 }} />
          </Tooltip>
        </IconButton>
        <IconButton href="https://drive.google.com/file/d/1j8ZHkVB8OXmieoJCr4ARw35FMrhvuDmt/view?usp=sharing">
          <Tooltip title="Resume">
            <WorkHistoryIcon sx={{ color: "white", fontSize: 45 }} />
          </Tooltip>
        </IconButton>
        <IconButton href="https://github.com/patllamas">
          <Tooltip title="Github">
            <GitHubIcon sx={{ color: "white", fontSize: 45 }} />
          </Tooltip>
        </IconButton>
      </div>
    </div>
  );
};

export default ContactInfo;

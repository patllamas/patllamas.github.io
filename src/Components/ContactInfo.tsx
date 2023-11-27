import { Tooltip, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <Typography variant="h1">Contact me.</Typography>
      <div>
        <LinkedInIcon sx={{ fontSize: 45 }} />
        <Tooltip title="Resume">
          <WorkHistoryIcon sx={{ fontSize: 45 }} />
        </Tooltip>
        <GitHubIcon sx={{ fontSize: 45 }} />
      </div>
    </div>
  );
};

export default ContactInfo;

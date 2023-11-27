import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div style={{textAlign: "center"}}>

      <Typography variant="h1">Contact me.</Typography>
      <div>
        <LinkedInIcon />
        <WorkHistoryIcon />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default ContactInfo;

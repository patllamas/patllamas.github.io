import React, { useState } from "react";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import Project from "./Project";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Projects = (props: any) => {
  const [currentProject, setCurrentProject] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (newInfo: string) => {
    setCurrentProject(newInfo);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <div style={{ textAlign: "center", userSelect: "none" }}>
      <Typography sx={{ typography: { xs: "h2", md: "h1" } }}>
        Things I've done.
      </Typography>
      <div style={{ fontSize: "35px" }}>
        <Button
          onClick={() => handleOpen("amara")}
          variant="text"
          sx={{
            fontSize: "35px",
            margin: "5px",
            fontWeight: "bold",
            color: "#592F52",
          }}
        >
          Amara
        </Button>
        |
        <Button
          onClick={() => handleOpen("dowehaveliftoff")}
          variant="text"
          sx={{
            fontSize: "35px",
            margin: "5px",
            fontWeight: "bold",
            color: "#592F52",
          }}
        >
          Do We Have Liftoff?
        </Button>
        |
        <Button
          onClick={() => handleOpen("lordfairfax")}
          variant="text"
          sx={{
            fontSize: "35px",
            margin: "5px",
            fontWeight: "bold",
            color: "#592F52",
          }}
        >
          Lord Fairfax
        </Button>
        |
        <Button
          onClick={() => handleOpen("coolbot")}
          variant="text"
          sx={{
            fontSize: "35px",
            margin: "5px",
            fontWeight: "bold",
            color: "#592F52",
          }}
        >
          coolbot
        </Button>
      </div>
      <Dialog open={openModal} onClose={handleClose}>
        <Project currentProject={currentProject} />
      </Dialog>
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
            color: "black",
          }}
        />
      </IconButton>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import { Box, Button, Dialog, Typography } from "@mui/material";
import Project from "./Project";

const Projects = () => {
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
          sx={{ fontSize: "35px", margin: "5px", fontWeight: "bold" }}
        >
          Amara
        </Button>
        |
        <Button
          onClick={() => handleOpen("dowehaveliftoff")}
          variant="text"
          sx={{ fontSize: "35px", margin: "5px", fontWeight: "bold" }}
        >
          Do We Have Liftoff?
        </Button>
        |
        <Button
          onClick={() => handleOpen("lordfairfax")}
          variant="text"
          sx={{ fontSize: "35px", margin: "5px", fontWeight: "bold" }}
        >
          Lord Fairfax
        </Button>
        |
        <Button
          onClick={() => handleOpen("coolbot")}
          variant="text"
          sx={{ fontSize: "35px", margin: "5px", fontWeight: "bold" }}
        >
          coolbot
        </Button>
      </div>
      <Dialog open={openModal} onClose={handleClose}>
        <Project currentProject={currentProject} />
      </Dialog>
    </div>
  );
};

export default Projects;

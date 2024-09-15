import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Project from "./Project";

const Projects = (props: any) => {
  const [currentProject, setCurrentProject] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (newInfo: string) => {
    setCurrentProject(newInfo);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  var projects = [
    {
      image: "barhaus",
      name: "Barhaus Bastion",
      year: "2024",
      description:
        "Led a team of 4 to create a hand drawn, 2D tower defense game using the Godot Engine within 1 week for the Migjam 22. Designed and programmed enemies, towers, construction, player unit, and win conditions.",
      technology: "Godot, GDScript, Git",
    },
    {
      image: "amara",
      name: "Amara",
      year: "2023",
      description:
        "Led a team of 8 to create a hand drawn, 2D adventure game using the Godot Engine within 1 month.",
      technology: "Godot, GDScript, Git",
    },
    {
      image: "dowehaveliftoff",
      name: "Do we Have Liftoff?",
      year: "2023",
      description:
        "Solo project for a 3 day game jam. A space horror FPS game based on Dead Space and Resident Evil with a retro aesthetic.",
      technology: "Godot, GDScript, Git",
    },
    {
      image: "babyrun",
      name: "Baby Run",
      year: "2024",
      description: "Created an infinite stairs type ",
      technology: "Godot, GDScript, Git",
    },
  ];

  return (
    <div style={{ textAlign: "center", userSelect: "none" }}>
      <Typography sx={{ typography: { xs: "h3", md: "h2" } }}>
        Games and projects I've created.
      </Typography>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width:"40%"
        }}
      >
        <Carousel sx={{ maxWidth: "600px" }}>
          {projects.map((project, i) => (
            <Project projectInfo={project} />
          ))}
        </Carousel>
      </div>
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

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
      year: "August 2024",
      description:
        "Led a team of 4 to create a hand drawn, 2D tower defense game using the Godot Engine within 1 week for the Migjam 22. Designed and programmed enemies, towers, construction, player unit, and win conditions. Playable on browsers.",
      technology: "Godot 4.3, GDScript, Git",
      link: "https://starcerealgames.itch.io/barhaus-bastion",
      award: "",
    },
    {
      image: "babyrun",
      name: "Baby Run",
      year: "May 2024",
      description: "Built an infinite stairs type for a friend's baby shower. Programmed procedural-generated stairs, player movement, created UI/UX design, and implemented an asynchronous online leaderboard using the Silentwolf API for players to compete with each other during a babyshower. The winner even got a blender!",
      technology: "Godot 4.3, GDScript, Git",
      link: "https://starcerealgames.itch.io/baby-run",
      award: "",
    },
    {
      image: "wokeup",
      name: "I Woke up in a Different Dimension!",
      year: "February 2024",
      description: "Designed and implemented a 3 minute survival game. Created in 1 week for the Chill Jam #6. Designed enemy attacks, player character, menu UI/UX, story, dialogue, and victory/defeat conditions. Playable on browsers and Windows.",
      technology: "Godot 4.2, GDScript, Git",
      link: "https://starcerealgames.itch.io/i-accidentally-woke-up-in-a-different-dimension-again",
      award: "Won 3rd place out of 76 entries!",
    },
    {
      image: "christmas",
      name: "Defender of Christmas",
      year: "December 2023",
      description: "Defend the Christmas Tree from gift hating rats. Created for the Christmas Game Jam 2023 in 1 week. Designed enemies, player character with 2 attacks (spear and sword), enemy pathfinding, enemy projectiles, turrets, and 3 different levels.",
      technology: "Godot 4.1, GDScript, Git",
      link: "https://starcerealgames.itch.io/defender-of-christmas",
      award: "Took home 2nd place out of 28 entries!",
    },
    {
      image: "dowehaveliftoff",
      name: "Do we Have Liftoff?",
      year: "July 2023",
      description:
        "Solo project for a 3 day game jam. A space horror FPS game based on Dead Space and Resident Evil with a retro aesthetic. Programmed enemy AI, player movement (walking, jumping, sprinting), gun interactions (pistol reloading, pistol shooting, weapon switching, knife attacks), created puzzles, and horror asethetic.",
      technology: "Godot 4.1, GDScript, Git",
      link: "https://starcerealgames.itch.io/do-we-have-liftoff",
      award: "",
    },
    {
      image: "amara",
      name: "Amara",
      year: "March 2023",
      description: 
        "Led a team of 8 to create a hand drawn, 2D adventure game using the Godot Engine within 1 month. Playable on browser.",
      technology: "Godot 3.5, GDScript, Git",
      link: "https://starcerealgames.itch.io/amara",
      award: "Won 12th place out of 126 entries.",
    },
  ];

  return (
    <div style={{ textAlign: "center", userSelect: "none"}}>
      <Typography
        sx={{ typography: { xs: "h3", md: "h2" }, marginBottom: "30px" }}
      >
        Games and projects I've created.
      </Typography>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          // width: "40%",
          width: "600px"
        }}
      >
        <Carousel sx={{ maxWidth: {xs: "300px", md:"600px"} }}>
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

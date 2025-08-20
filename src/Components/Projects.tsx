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
      image: "dokijam",
      name: "Doki's Dream Heist",
      year: "August 2025",
      description:
        "As a game director of 4, I led the team to create a 32-bit top down shooter game in the Godot Engine within two weeks for Doki-Jam 2025. Led the vision for all gameplay elements including enemies, upgrades, online leaderboard, player controller, and a time trial. Delivered a fully playable browser game.",
      technology: "Godot 4.4, GDScript, Git",
      link: "https://starcerealgames.itch.io/dokis",
      award: "",
    },
    {
      image: "barhaus",
      name: "Barhaus Bastion",
      year: "August 2024",
      description:
        "Directed a team of four to develop a hand-drawn, 2D tower defense game in the Godot Engine within one week for Migjam 22. Designed and programmed gameplay elements including enemies, towers, construction mechanics, player units, and win conditions. Delivered a fully playable browser game.",
      technology: "Godot 4.3, GDScript, Git",
      link: "https://starcerealgames.itch.io/barhaus-bastion",
      award: "",
    },
    {
      image: "babyrun",
      name: "Baby Run",
      year: "May 2024",
      description: "Developed an infinite stairs game for a friend's baby shower, featuring procedurally generated stairs and player movement. Designed the UI/UX and implemented an asynchronous online leaderboard using the Silentwolf API, allowing guests to compete in real-time. The winner received a blender as a prize!",
      technology: "Godot 4.3, GDScript, Git",
      link: "https://starcerealgames.itch.io/baby-run",
      award: "",
    },
    {
      image: "wokeup",
      name: "I Woke up in a Different Dimension!",
      year: "February 2024",
      description: "Designed and developed a 3-minute survival game within one week for Chill Jam #6. Created enemy attacks, player character, menu UI/UX, story, dialogue, and victory/defeat conditions. The game is fully playable on browsers and Windows.",
      technology: "Godot 4.2, GDScript, Git",
      link: "https://starcerealgames.itch.io/i-accidentally-woke-up-in-a-different-dimension-again",
      award: "Won 3rd place out of 76 entries!",
    },
    {
      image: "christmas",
      name: "Defender of Christmas",
      year: "December 2023",
      description: "Developed 'Defend the Christmas Tree,' a game created in one week for the Christmas Game Jam 2023. Designed enemies, a player character with spear and sword attacks, enemy pathfinding, projectiles, turrets, and three unique levels.",
      technology: "Godot 4.1, GDScript, Git",
      link: "https://starcerealgames.itch.io/defender-of-christmas",
      award: "Took home 2nd place out of 28 entries!",
    },
    {
      image: "dowehaveliftoff",
      name: "Do we Have Liftoff?",
      year: "July 2023",
      description:
        "Completed a solo project for a 3-day game jam, developing a space horror FPS inspired by Dead Space and Resident Evil with a retro aesthetic. Programmed enemy AI, player movement, gun mechanics, and designed puzzles to enhance the horror experience.",
      technology: "Godot 4.1, GDScript, Git",
      link: "https://starcerealgames.itch.io/do-we-have-liftoff",
      award: "",
    },
    {
      image: "amara",
      name: "Amara",
      year: "March 2023",
      description: 
        "Led a team of eight to develop a hand-drawn, 2D adventure game using the Godot Engine in one month. Programmed five unique enemies, each with distinct state machines, and designed a multi-stage boss battle.",
      technology: "Godot 3.5, GDScript, Git",
      link: "https://starcerealgames.itch.io/amara",
      award: "Won 12th place out of 126 entries.",
    },
  ];

  return (
    <div style={{ textAlign: "center", userSelect: "none"}}>
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" }, marginBottom: "30px" }}
      >
        Games and projects I've created.
      </Typography>
      <Box
        sx={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          width: {xs:"80%", md: "600px"},
        }}
      >
        <Carousel sx={{ maxWidth: {xs: "300px", md:"600px"} }}>
          {projects.map((project, i) => (
            <Project projectInfo={project} />
          ))}
        </Carousel>
      </Box>
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

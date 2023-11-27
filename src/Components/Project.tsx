import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Project = (props: any) => {
  // needed props: image, name, year, description, technology used
  const [projectInfo, setProjectInfo] = useState({
    image: "amara",
    name: "N/A",
    year: "N/A",
    description: "N/A",
    technology: "N/A",
  });

  useEffect(() => {
    projectSwitch();
  }, []);

  const projectSwitch = () => {
    switch (props.currentProject) {
      case "amara":
        setProjectInfo({
          image: "amara",
          name: "Amara",
          year: "2023",
          description:
            "Led a team of 8 to create a hand drawn 2D adventure game using the Godot Engine within 1 month.",
          technology: "Godot, GDScript, Git",
        });
        break;

      case "dowehaveliftoff":
        setProjectInfo({
          image: "dowehaveliftoff",
          name: "Do we Have Liftoff?",
          year: "2023",
          description:
            "Solo project for a 3 day game jam. A space horror FPS game based on Dead Space and Resident Evil with a retro aesthetic.",
          technology: "Godot, GDScript, Git",
        });
        break;

      case "lordfairfax":
        setProjectInfo({
          image: "lordfairfax",
          name: "Lord Fairfax",
          year: "2021",
          description:
            "Developed a full stack pet motel booking website. Complete with user registration, profiles, pets, and booking rooms.",
          technology: "Django, Python, HTML, CSS, JavaScript",
        });
        break;

      case "coolbot":
        setProjectInfo({
          image: "coolbot",
          name: "coolbot",
          year: "2021",
          description:
            "Created a Discord bot to help moderate users. It also kept track of my Minecraft server status, without having to RDP and check it manually.",
          technology: "JavaScript, Discord.js",
        });
        break;

      default:
        setProjectInfo({
          image: "amara",
          name: "N/A",
          year: "20XX",
          description: "N/A",
          technology: "N/A",
        });
    }
  };

  return (
    <Card sx={{ textAlign: "center", maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={require(`../images/Projects/${projectInfo.image}.png`)}
        title="Amara"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {projectInfo.name}
        </Typography>
        <Typography variant="body1">
          Technology Used: {projectInfo.technology}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {projectInfo.year}
        </Typography>
        <Typography variant="body1">{projectInfo.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Project;

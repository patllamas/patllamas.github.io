import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Project = (props: any) => {
  return (
    <Paper sx={{maxHeight:"650px", height: "650px",}}>
      <CardMedia
        sx={{ height: "450px", }}
        image={require(`../images/Projects/${props.projectInfo.image}.png`)}
        title="Amara"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.projectInfo.name}
        </Typography>
        <Typography variant="body1">
          Technology Used: {props.projectInfo.technology}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.projectInfo.year}
        </Typography>
        <Typography variant="body1">{props.projectInfo.description}</Typography>
      </CardContent>
    </Paper>
  );
};

export default Project;

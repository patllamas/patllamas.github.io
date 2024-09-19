import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Project = (props: any) => {
  return (
    <Paper
      sx={{
        maxHeight: { xs: "500px", md: "675px" },
        height: { xs: "450px", md: "675px" },
      }}
    >
      <Link href={props.projectInfo.link} target="_blank">
        <CardMedia
          sx={{ height: { xs: "150px", md: "450px" } }}
          image={require(`../images/Projects/${props.projectInfo.image}.png`)}
          title="Amara"
        />
      </Link>
      <CardContent>
        <Typography sx={{ typography: { xs: "h5", md: "h4" }, }}>{props.projectInfo.name}</Typography>

        <Typography variant="body1" sx={{ fontSize: "1.20rem" }}>
          {props.projectInfo.year}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: ".8rem", md: "1rem" } }}
        >
          Technology Used: {props.projectInfo.technology}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: ".8rem", md: "1rem" } }}
        >
          {props.projectInfo.description}
        </Typography>
        <Typography
          variant="body1"
          color={"#00308F"}
          sx={{ fontSize: { xs: ".8rem", md: "1rem" }, fontWeight:"bold"}}
        >
          {props.projectInfo.award}
        </Typography>
      </CardContent>
    </Paper>
  );
};

export default Project;

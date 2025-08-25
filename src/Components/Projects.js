// src/Components/Projects.js
import {
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";

export default function Projects() {
  const projects = [
    {
      title: "Rock Paper Scissors Game",
      description: "A fun interactive game to test your luck and strategy.",
      features: [
        "Simple and responsive UI",
        "Randomized computer moves",
        "Score tracking across rounds",
      ],
      demo: "https://ruturajk-rockpaperscissorgame.netlify.app/",
      github: "#",
    },
    {
      title: "Sudoku Puzzle",
      description: "A classic Sudoku puzzle with interactive digit placement.",
      features: [
        "Grid-based interactive gameplay",
        "Validation of rules while placing numbers",
        "Reset and check feature included",
      ],
      demo: "https://ruturajk-sudokupuzzle.netlify.app/",
      github: "#",
    },
    {
      title: "Tic Tac Toe",
      description: "A simple Tic Tac Toe game with win detection and reset.",
      features: [
        "Click-to-play interface",
        "Win detection logic",
        "Reset and restart functionality",
      ],
      demo: "https://ruturajk1604.github.io/tiktaktoe/",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <CommonCard title="Personal Projects" headerColor="#2563EB">
        <Grid container spacing={4} mt={2}>
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  p: 2,
                  height: "100%",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "scale(1.02)",
                    transition: "0.3s",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom color="primary">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <List dense sx={{ pl: 2 }}>
                  {project.features.map((feat, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemText primary={`• ${feat}`} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 2 }}>
                  {project.github !== "#" && (
                    <Button
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 1 }}
                    >
                      GitHub
                    </Button>
                  )}
                  <Button
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CommonCard>
    </section>
  );
}

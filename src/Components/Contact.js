// src/Components/Contact.js
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Contact() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  // Theme-based icon colors
  const iconColors = {
    light: theme.palette.primary.main,
    dark: theme.palette.primary.main,
    corporate: "#0d47a1",
    fun: "#FF4081",
  };

  // Theme-based text color
  const textColors = {
    light: theme.palette.text.primary,
    dark: theme.palette.text.primary,
    corporate: theme.palette.text.primary,
    fun: theme.palette.text.primary,
  };

  // Theme-based extra fun text
  const funLine =
    themeName === "fun"
      ? "📬 Let’s connect and make something awesome together!"
      : "";

  return (
    <Box
      id="contact"
      sx={{ py: 10, bgcolor: theme.palette.background.default }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          color={textColors[themeName]}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color={textColors[themeName]}
          mb={5}
        >
          Feel free to reach out for opportunities, collaborations, or just to
          connect.
          {funLine && (
            <>
              <br />
              {funLine}
            </>
          )}
        </Typography>

        {/* Contact Info Row */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon sx={{ color: iconColors[themeName] }} />
              <Link
                href="mailto:ruturajkulkarni1604@gmail.com"
                sx={{ color: textColors[themeName] }}
              >
                ruturajkulkarni1604@gmail.com
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <LinkedInIcon sx={{ color: iconColors[themeName] }} />
              <Link
                href="https://linkedin.com/in/ruturaj-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: textColors[themeName] }}
              >
                linkedin.com/in/ruturaj-kulkarni
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <GitHubIcon sx={{ color: iconColors[themeName] }} />
              <Link
                href="https://github.com/ruturajk1604"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: textColors[themeName] }}
              >
                github.com/ruturajk1604
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

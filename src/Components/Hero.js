import {
  Box,
  Typography,
  // Button,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  const heroText = {
    light: {
      title: "Hi, I’m Ruturaj",
      subtitle: "Web Developer | React.js Specialist",
      description:
        "An enthusiastic developer who loves building clean, efficient, and scalable web applications. If you’re curious, let’s connect and create better solutions together.",
      photo: "/Photo.jpeg",
    },
    dark: {
      title: "Hi, I’m Ruturaj",
      subtitle: "Web Developer | React.js Specialist",
      description:
        "An enthusiastic developer who loves building clean, efficient, and scalable web applications. If you’re curious, let’s connect and create better solutions together.",
      photo: "/Photo.jpeg",
    },
    corporate: {
      title: "Hello, I’m Ruturaj Kulkarni",
      subtitle: "Professional Web Developer | React.js Expert",
      description:
        "A results-driven web developer with expertise in React.js, delivering high-quality, scalable, and maintainable applications. Passionate about creating robust solutions that drive business success.",
      photo: "/PhotoCorporate.jpeg",
    },
    fun: {
      title: "Hey there! I’m Ruturaj 😎",
      subtitle: "React Wizard | Frontend Magician ✨",
      description:
        "A passionate developer who loves crafting awesome web apps 🚀. Fun-loving, creative, and always experimenting with new ideas 💡. Let’s build something amazing together! 🎉",
      photo: "/PhotoFun.jpeg",
    },
  };

  const { title, subtitle, description, photo } =
    heroText[themeName] || heroText.light;

  // Define button styles per theme
  // const buttonStyles = {
  //   light: { bgcolor: "#FF8C42", color: "white" },
  //   dark: { bgcolor: "#90caf9", color: "black" },
  //   corporate: { bgcolor: "#0d47a1", color: "white" },
  //   fun: {
  //     bgcolor: "linear-gradient(45deg, #FF6F00, #1E88E5, #E53935, #FDD835)",
  //     color: "white",
  //   },
  // };

  // const currentButtonStyle = buttonStyles[themeName] || buttonStyles.light;

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        transition: "all 0.3s ease",
        margin: "50px auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: Profile Photo */}
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              alt="Ruturaj Kulkarni"
              src={process.env.PUBLIC_URL + photo}
              sx={{
                width: { xs: 220, md: 280 },
                height: { xs: 220, md: 280 },
                boxShadow: 4,
                border: "4px solid white",
                transition: "all 0.3s ease",
              }}
            />
          </Grid>

          {/* Right: Text Content */}
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              color={theme.palette.text.primary}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              color={theme.palette.text.secondary}
              gutterBottom
            >
              {subtitle}
            </Typography>

            <Typography
              variant="body1"
              color={theme.palette.text.secondary}
              sx={{ mt: 2, fontSize: "1.1rem", maxWidth: 600 }}
            >
              {description}
            </Typography>

            {/* <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                borderRadius: 2,
                alignSelf: { xs: "center", md: "flex-start" },
                background: currentButtonStyle.bgcolor,
                color: currentButtonStyle.color,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  opacity: 0.9,
                  background: currentButtonStyle.bgcolor,
                },
              }}
              href="#projects"
            >
              View My Work
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
} from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "grey.100",
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
              src="/Photo.jpeg" // your saved photo
              sx={{
                width: { xs: 220, md: 280 },
                height: { xs: 220, md: 280 },
                boxShadow: 4,
                border: "4px solid white",
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
            >
              Hi, I’m Ruturaj
            </Typography>

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Web Developer | React.js Specialist
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, fontSize: "1.1rem", maxWidth: 600 }}
            >
              An enthusiastic developer who loves building clean, efficient, and
              scalable web applications. If you’re curious, let’s connect and
              create better solutions together.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                borderRadius: 2,
                alignSelf: { xs: "center", md: "flex-start" },
              }}
              href="#projects"
            >
              View My Work
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

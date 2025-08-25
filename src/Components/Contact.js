// src/Components/Contact.js
import {
  Box,
  Container,
  Typography,
  Link,
  Grid
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "grey.100" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={5}
        >
          Feel free to reach out for opportunities, collaborations, or just to
          connect.
        </Typography>

        {/* Contact Info Row */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon color="primary" />
              <Link href="mailto:ruturajkulkarni1604@gmail.com">
                ruturajkulkarni1604@gmail.com
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <LinkedInIcon color="primary" />
              <Link
                href="https://linkedin.com/in/ruturaj-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ruturaj-kulkarni
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" gap={1}>
              <GitHubIcon color="primary" />
              <Link
                href="https://github.com/ruturajk1604"
                target="_blank"
                rel="noopener noreferrer"
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

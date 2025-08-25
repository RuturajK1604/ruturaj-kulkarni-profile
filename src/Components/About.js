// src/Components/AboutMe.js
import { Typography, Grid, Button } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <CommonCard title="About Me" headerColor="#F97316">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem" }}
            >
              Frontend-focused Full Stack Developer with 3+ years of experience
              building scalable web applications using React.js, Node.js, and
              SQL. Strong foundation in UI development, REST API integration,
              and modular architecture. Proficient in agile methodologies and
              version control. Basic understanding of AWS services like
              Parameter Store, CloudWatch, and Kibana.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, fontSize: "1.1rem" }}
            >
              Beyond coding, I’m an enthusiastic learner who believes in
              continuous growth and collaboration. My goal is to create seamless
              user experiences while writing clean and maintainable code.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 4, borderRadius: 2 }}
              href="/Ruturaj_Kulkarni.pdf" // add your resume in public folder
              target="_blank"
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </CommonCard>
    </section>
  );
}

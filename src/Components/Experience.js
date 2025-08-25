// src/Components/Experience.js
import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Developer",
      company: "The Digital Group Infotech, Pune",
      duration: "Jan 2025 – Present",
      responsibilities: [
        "Developing and maintaining a reusable React.js component library across HRMS product modules.",
        "Built scalable RESTful APIs using Node.js and SQL for Employee Management, Attendance, and Payroll.",
        "Collaborated with cross-functional teams in agile sprints; contributed to UI/UX enhancements and performance tuning.",
        "Maintained code quality using Git and accelerated development cycles with reusable patterns.",
      ],
    },
    {
      role: "Software Developer",
      company: "Infosys Ltd., Pune",
      duration: "Feb 2022 – Jan 2025",
      responsibilities: [
        "Developed and maintained a customer onboarding application for an insurance client using React.js and Node.js.",
        "Integrated backend logic with MongoDB and built modular, secure APIs.",
        "Worked in agile ceremonies (JIRA), using GitLab for version control and CI workflows.",
        "Gained exposure to cloud concepts with basic understanding of AWS tools (Parameter Store, CloudWatch, Kibana).",
      ],
    },
  ];

  return (
    <section id="exoerience" className="py-16 bg-gray-50">
      <CommonCard title="Experience" headerColor="#F97316">
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {exp.role}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {exp.company} | <i>{exp.duration}</i>
              </Typography>

              <List sx={{ listStyleType: "disc", pl: 4 }}>
                {exp.responsibilities.map((item, i) => (
                  <ListItem key={i} sx={{ display: "list-item", py: 0 }}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </CommonCard>
    </section>
  );
}

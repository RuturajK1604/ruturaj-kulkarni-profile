// src/Components/Experience.js
import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Experience() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  const experiences = [
    {
      role: "Senior Software Developer",
      company: "The Digital Group Infotech, Pune",
      duration: "Jan 2025 – Present",
      responsibilities: {
        light: [
          "Developing and maintaining a reusable React.js component library across HRMS product modules.",
          "Built scalable RESTful APIs using Node.js and SQL for Employee Management, Attendance, and Payroll.",
          "Collaborated with cross-functional teams in agile sprints; contributed to UI/UX enhancements and performance tuning.",
          "Maintained code quality using Git and accelerated development cycles with reusable patterns.",
        ],
        dark: [
          "Developing and maintaining a reusable React.js component library across HRMS product modules.",
          "Built scalable RESTful APIs using Node.js and SQL for Employee Management, Attendance, and Payroll.",
          "Collaborated with cross-functional teams in agile sprints; contributed to UI/UX enhancements and performance tuning.",
          "Maintained code quality using Git and accelerated development cycles with reusable patterns.",
        ],
        corporate: [
          "Spearheaded the development of a reusable React.js component library for enterprise HRMS modules.",
          "Designed and implemented scalable REST APIs using Node.js & SQL for Employee Management, Attendance, and Payroll.",
          "Partnered with cross-functional teams in agile sprints; delivered optimized UI/UX and ensured high performance.",
          "Ensured code quality and maintainability with Git and reusable development patterns.",
        ],
        fun: [
          "Built a super reusable React.js component library 🧩 for our HRMS modules!",
          "Created scalable REST APIs using Node.js & SQL 🛠️ for Employee Management, Attendance, and Payroll.",
          "Worked with awesome teams in agile sprints 🚀; improved UI/UX and app performance.",
          "Kept the code clean & reusable ✨ using Git and smart patterns.",
        ],
      },
    },
    {
      role: "Software Developer",
      company: "Infosys Ltd., Pune",
      duration: "Feb 2022 – Jan 2025",
      responsibilities: {
        light: [
          "Developed and maintained a customer onboarding application using React.js and Node.js.",
          "Integrated backend logic with MongoDB and built modular, secure APIs.",
          "Worked in agile ceremonies (JIRA), using GitLab for version control and CI workflows.",
          "Gained exposure to cloud concepts with basic understanding of AWS tools (Parameter Store, CloudWatch, Kibana).",
        ],
        dark: [
          "Developed and maintained a customer onboarding application using React.js and Node.js.",
          "Integrated backend logic with MongoDB and built modular, secure APIs.",
          "Worked in agile ceremonies (JIRA), using GitLab for version control and CI workflows.",
          "Gained exposure to cloud concepts with basic understanding of AWS tools (Parameter Store, CloudWatch, Kibana).",
        ],
        corporate: [
          "Contributed to the development and maintenance of a customer onboarding app using React.js and Node.js.",
          "Integrated backend logic with MongoDB and designed modular, secure APIs for enterprise use.",
          "Participated in agile ceremonies, leveraged GitLab for version control and CI workflows.",
          "Acquired foundational knowledge of AWS services including Parameter Store, CloudWatch, and Kibana.",
        ],
        fun: [
          "Built a cool customer onboarding app with React.js & Node.js 😎.",
          "Connected backend logic with MongoDB 🗄️ and wrote modular APIs.",
          "Joined fun agile sprints 🏃‍♂️ using GitLab for version control & CI workflows.",
          "Explored AWS services like Parameter Store 🔑, CloudWatch 📊 & Kibana 📈.",
          "Had many sleepless nights 😴 so that users could enjoy smooth and peaceful onboarding experiences 🌙✨.",
        ],
      },
    },
  ];

  return (
    <section id="experience" className="py-16">
      <CommonCard title="Experience">
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: theme.palette.primary.main }}
              >
                {exp.role}
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.secondary}
                gutterBottom
              >
                {exp.company} | <i>{exp.duration}</i>
              </Typography>

              <List sx={{ listStyleType: "disc", pl: 4 }}>
                {(
                  exp.responsibilities[themeName] || exp.responsibilities.light
                ).map((item, i) => (
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

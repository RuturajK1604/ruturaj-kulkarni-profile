import { Card, CardContent, Typography, Grid } from "@mui/material";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import CommonCard from "../Containers/SectionWrapper"; // ✅ import reusable card

const skills = [
  {
    icon: <FaReact size={40} color="#61DBFB" />,
    title: "React.js",
    description:
      "3+ years building scalable UIs with React.js, hooks, and component-driven architecture.",
  },
  {
    icon: <FaNodeJs size={40} color="#68A063" />,
    title: "Node.js",
    description:
      "Hands-on experience creating REST APIs and backend services using Node.js and Express.",
  },
  {
    icon: <SiMongodb size={40} color="#4DB33D" />,
    title: "MongoDB",
    description:
      "Worked on NoSQL DB design, aggregation pipelines, and queries for full-stack apps.",
  },
  {
    icon: <FaJs size={40} color="#F7DF1E" />,
    title: "JavaScript (ES6+)",
    description:
      "Strong knowledge of ES6+ features, async programming, and modern frontend development.",
  },
  {
    icon: <FaHtml5 size={40} color="#E34F26" />,
    title: "HTML5",
    description:
      "Built semantic, accessible, and SEO-friendly structures for web applications.",
  },
  {
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    title: "CSS3",
    description:
      "Expert in responsive design, Flexbox, Grid, and styling frameworks.",
  },
  {
    icon: <SiRedux size={40} color="#764ABC" />,
    title: "Redux",
    description:
      "Implemented scalable state management patterns in large React applications.",
  },
  {
    icon: <SiTypescript size={40} color="#3178C6" />,
    title: "TypeScript",
    description:
      "Applied static typing to React/Node projects for improved scalability and reliability.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <CommonCard title="Skills" headerColor="#61DBFB">
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: 200,
                  width: 320,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                }}
                className="shadow-md hover:shadow-lg transition"
              >
                <CardContent sx={{ p: 0 }}>
                  {skill.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      fontWeight: "bold",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1, whiteSpace: "normal", wordWrap: "break-word" }}
                  >
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CommonCard>
    </section>
  );
}

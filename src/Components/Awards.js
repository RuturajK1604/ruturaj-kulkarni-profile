// src/Components/Awards.js
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";

export default function Awards() {
  const { themeName } = useThemeContext();

  const awardText = {
    light: [
      "Outstanding fresher recognized for exceptional performance at Infosys.",
      "Delivered a critical requirement on a tight deadline, earning rapid recognition.",
      "Significant contribution to a high-priority client project (Max Life Insurance).",
      "Completed AWS Practitioner course and assessment successfully.",
    ],
    dark: [
      "Outstanding fresher recognized for exceptional performance at Infosys.",
      "Delivered a critical requirement on a tight deadline, earning rapid recognition.",
      "Significant contribution to a high-priority client project (Max Life Insurance).",
      "Completed AWS Practitioner course and assessment successfully.",
    ],
    corporate: [
      "Awarded for excellence as a fresher, demonstrating high-impact performance at Infosys.",
      "Recognized for delivering a critical requirement under stringent timelines.",
      "Impact award for contributing significantly to a key client project (Max Life Insurance).",
      "Successfully certified in AWS Practitioner course, showcasing cloud proficiency.",
    ],
    fun: [
      "Rookie of the Quarter 🏆 for making a smashing start at Infosys!",
      "Insta Award ⚡ for delivering a mission-impossible requirement on time!",
      "Impact Award 🌟 for creating waves in a high-stakes client project.",
      "AWS Practitioner Certificate ☁️ completed like a true cloud ninja!",
    ],
  };

  const summaries = awardText[themeName] || awardText.light;

  const awards = [
    {
      title: "Rookie of the Quarter",
      issuer: "Infosys",
      year: 2022,
      image: "/certificates/rookie.png",
    },
    {
      title: "Insta Award",
      issuer: "Infosys",
      year: 2023,
      image: "/certificates/insta.png",
    },
    {
      title: "Impact Award",
      issuer: "Max Life Insurance / Infosys",
      year: 2023,
      image: "/certificates/impact.png",
    },
    {
      title: "AWS Practitioner Certificate",
      issuer: "Infosys",
      year: 2024,
      image: "/certificates/aws.png",
    },
  ];

  return (
    <section id="awards" className="py-16">
      <CommonCard title="Awards & Achievements">
        {/* Horizontal scroll container */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            padding: 1,
            gap: 2,
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
          }}
        >
          {awards.map((award, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 300, // fixed width for horizontal scroll
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <img
                src={process.env.PUBLIC_URL + award.image}
                alt={award.title}
                style={{
                  width: "280px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <CardContent sx={{ padding: "0 8px" }}>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {award.title}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  sx={{ fontSize: "0.85rem" }}
                >
                  {award.issuer} • {award.year}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  mt={1}
                  sx={{ fontSize: "0.8rem" }}
                >
                  {summaries[index]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </CommonCard>
    </section>
  );
}

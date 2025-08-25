// src/Components/CommonCard.js
import { Box, Typography, Paper } from "@mui/material";

export default function CommonCard({
  title,
  children,
  headerColor = "#FF8C42",
}) {
  const isGradient = headerColor.startsWith("linear-gradient");
  const shadowColor = isGradient ? "#FF8C42" : headerColor;

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        my: 6, // <-- adds vertical margin (top & bottom)
        height: "500px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: `0 6px 20px ${shadowColor}55`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: headerColor,
          color: "white",
          py: 2,
          px: 3,
          fontWeight: "bold",
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          overflowY: "auto",
          bgcolor: "grey.50",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}

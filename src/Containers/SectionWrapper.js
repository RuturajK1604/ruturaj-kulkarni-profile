// src/Components/CommonCard.js
import { Box, Typography, Paper, IconButton, Collapse } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CommonCard({ title, children }) {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => setOpen(!open);

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        my: 6,
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "#FF8C42",
          color: "white",
          py: 2,
          px: 3,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <IconButton
          onClick={toggleOpen}
          sx={{
            color: "white",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* Collapsible Content */}
      <Collapse in={open}>
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
      </Collapse>
    </Paper>
  );
}

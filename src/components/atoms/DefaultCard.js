import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

function DefaultCard() {
  return (
    <Paper elevation={3} variant="outlined">
      <Typography
        variant="h3"
        sx={{
          color: "transparentGreen.main",
        }}
      >
        Hello, current user!
      </Typography>
      <Typography variant="h2">Header2</Typography>
      <Typography variant="h3">Header3</Typography>
      <Button variant="contained" color="secondary" sx={{ display: "flex" }}>
        click
      </Button>
    </Paper>
  );
}

export default DefaultCard;

import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

function DefaultCard() {
  return (
    <Paper elevation={3} variant="outlined">
      <Typography variant="h1">Hello</Typography>
      <Typography
        variant="h2"
        sx={{
          color: "transparentGreen.main",
        }}
      >
        Eugenia
      </Typography>
      <Button variant="contained" color="secondary">
        click
      </Button>
      <Typography variant="body1">lalala</Typography>
    </Paper>
  );
}

export default DefaultCard;

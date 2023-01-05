import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import ExperimentLogo from "../../assets/ExperimentLogo";

function DefaultCard() {
  return (
    <Paper elevation={3} variant="outlined">
      <Typography
        variant="h1"
        sx={{
          color: "transparentGreen.main",
        }}
      >
        Header 1111
      </Typography>
      <Typography variant="h2">Header2</Typography>
      <Typography variant="h3">Header3</Typography>
      <Button variant="contained" color="secondary">
        click
      </Button>
      <Button variant="contained" color="secondary">
        click
      </Button>
      <ExperimentLogo sx={{ height: 10, width: 10 }}></ExperimentLogo>
    </Paper>
  );
}

export default DefaultCard;

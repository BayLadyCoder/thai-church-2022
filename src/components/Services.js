import { Container, Typography, Box, Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import VideocamIcon from "@mui/icons-material/Videocam";
import { theme } from "../theme";

const boxStyles = {
  border: "1px black solid",
  width: "45%",
  minWidth: "260px",
  maxWidth: "350px",
  margin: "40px 20px",
  padding: "25px 0",
  height: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};

const Services = (props) => {
  return (
    <Container
      align="center"
      sx={{
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "25px",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Services
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          marginTop: "15px",
          color: theme.palette.primary.main,
        }}
      >
        Worship Service: Every Sunday at 11.30am (Eastern Time)
      </Typography>
      <Container
        align="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box sx={boxStyles}>
          <PinDropIcon fontSize="large" color="secondary" />
          <Typography
            sx={{
              fontWeight: "bold",
              margin: "10px 0 20px 0",
            }}
          >
            Worship in Person
          </Typography>
          <Typography>
            Thai Church DC <br />
            3910 Lorcom Lane, Arlington <br />
            Virginia 22207
          </Typography>
        </Box>
        <Box sx={boxStyles}>
          <VideocamIcon fontSize="large" color="secondary" />
          <Typography
            sx={{
              fontWeight: "bold",
              margin: "10px 0 20px 0",
            }}
          >
            Worship Live on Facebook
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
            }}
          >
            Thai Church DC Facebook Page
          </Typography>
          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            href="https://www.facebook.com/groups/thaichurchdc"
            target="_blank"
          >
            Watch Live Worship
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default Services;

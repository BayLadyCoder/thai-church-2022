import { Container, Typography, Box, Button } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PlaceIcon from "@mui/icons-material/Place";
import { theme } from "../theme";

const boxStyles = {
  margin: "0 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const Event = ({ event }) => {
  const { title, dateTime, link, image, detail, location } = event;

  return (
    <Container
      id="events"
      style={{
        border: "1px #d5d5d5 solid",
        borderRadius: "10px",
        width: "60%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.white,
        marginBottom: "10px",
      }}
    >
      <img
        style={{ width: "30%", minWidth: "300px", borderRadius: "10px" }}
        src={image}
        alt=""
      />
      <Box sx={boxStyles}>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Roboto Slab, serif",
            textAlign: "left",
            color: theme.palette.primary.black,
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "5px 0 0px 0",
          }}
        >
          <EventNoteIcon fontSize="small" color="secondary" />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: theme.palette.secondary.bright,
              fontSize: "14px",
            }}
          >
            {dateTime}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "5px 0 10px 0",
          }}
        >
          <PlaceIcon
            fontSize="small"
            sx={{
              color: theme.palette.primary.grey,
            }}
          />
          <Typography
            sx={{
              color: theme.palette.primary.grey,
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {location}
          </Typography>
        </Box>
        <Typography
          sx={{
            marginBottom: "15px",
            textAlign: "justify",
            color: theme.palette.primary.black,
          }}
        >
          {detail}
        </Typography>
        <Button
          sx={{ fontWeight: "bold", textTransform: "none" }}
          variant="contained"
          href={link}
          target="_blank"
        >
          See more on Facebook
        </Button>
      </Box>
    </Container>
  );
};

export default Event;

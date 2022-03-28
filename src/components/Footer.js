import { Container, Typography, Box, Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import VideocamIcon from "@mui/icons-material/Videocam";
import FacebookIcon from "@mui/icons-material/Facebook";
import { theme } from "../theme";

const boxStyles = {
  margin: "0px 20px",
  padding: "25px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const Footer = (props) => {
  return (
    <div
      id="footer"
      style={{
        width: "100vw",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.black,
        color: theme.palette.primary.text,
      }}
    >
      <Container
        align="center"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={boxStyles}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "19px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontFamily: "Roboto Slab, serif",
              marginBottom: "20px",
            }}
          >
            Worship Services
          </Typography>

          <Typography
            sx={{
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            Sunday 11:30am (Eastern Time)
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            In Person at Thai Church DC <br />
            3910 Lorcom Lane, Arlington, Virginia 22207
          </Typography>
          <Button
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.text,
              border: `1px solid ${theme.palette.primary.text}`,
              borderRadius: "10px",
            }}
            variant="contained"
            href="https://www.facebook.com/groups/thaichurchdc"
            target="_blank"
            color="secondary"
          >
            <VideocamIcon />{" "}
            <span style={{ marginLeft: "5px" }}>Watch Live Worship</span>
          </Button>
        </Box>
        <Box sx={boxStyles}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "19px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontFamily: "Roboto Slab, serif",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            Thai Church DC <br /> 3910 Lorcom Lane Arlington, VA 22207.
          </Typography>
          <Typography
            sx={{
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            thaichurchdc@yahoo.com
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            +1 240-353-4884
          </Typography>
        </Box>
        <Box sx={boxStyles}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "19px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontFamily: "Roboto Slab, serif",
              marginBottom: "20px",
            }}
          >
            Follow Us On Social Media
          </Typography>

          <Button
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.text,
              border: `1px solid ${theme.palette.primary.text}`,
              borderRadius: "10px",
            }}
            variant="contained"
            href="https://www.facebook.com/groups/thaichurchdc"
            target="_blank"
          >
            <FacebookIcon />{" "}
            <span style={{ marginLeft: "5px" }}>Facebook Page</span>
          </Button>
        </Box>
      </Container>
      <Typography
        sx={{
          textAlign: "left",
          fontSize: "15px",
        }}
      >
        Thai Christian Church Washington DC Ⓒ 2022
      </Typography>
    </div>
  );
};

export default Footer;

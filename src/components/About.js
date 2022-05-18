import React from "react";
import { Typography, Container } from "@mui/material";
import collection from "../media/about/collectionCircle.png";
import { theme } from "../theme";

const About = () => {
  return (
    <div
      id="about"
      style={{
        padding: "50px 18% 60px 18%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.text,
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
          marginBottom: "20px",
        }}
      >
        About
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "justify",
            fontSize: "17px",
            marginBottom: { xs: "20px", lg: "0" },
          }}
        >
          <strong>Thai Christian Church Washington DC (TCCDC)</strong> is the
          church for our family to come and enjoy our blessing time from God our
          father.
          <br />
          <br />
          Our vision is{" "}
          <strong>
            <i>“Building God’s family in the DC area“</i>
          </strong>
          . We welcome everybody to our family, because we are God’s children.
          <br />
          <br />
          He loves us and he has prepares a way before us through His Son, Jesus
          Christ, we will rejoice happiness in this mortal life and be ready for
          the day to return to our Heavenly Father’s presence as eternal
          families for those who have faith in Jesus Christ.
        </Typography>
        <img
          src={collection}
          alt=""
          style={{ width: "400px", borderRadius: "50%", marginLeft: "40px" }}
        />
      </Container>
    </div>
  );
};

export default About;

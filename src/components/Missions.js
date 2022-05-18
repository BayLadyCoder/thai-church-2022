import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { theme } from "../theme";
import cross from "../media/mission/cross.jpeg";

const Missions = () => {
  return (
    <Container
      id="missions"
      sx={{
        margin: "50px 20%",
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
        Missions
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          margin: "15px 0",
          color: theme.palette.secondary.main,
          textAlign: "center",
        }}
      >
        จุดมุ่งหมายของคริสตจักรไทย (Mission Statement)
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0 10px 0",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <img
          src={cross}
          alt="Cross in the sky"
          style={{
            borderRadius: "10px",
            height: "250px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: { xs: "auto", md: "100%" },
            width: { xs: "90%", sm: "50%", md: "100%" },
            marginLeft: { xs: "0px", md: "50px" },
            marginTop: { xs: "25px", md: "0" },
          }}
        >
          <li
            style={{
              textAlign: "left",
              marginBottom: "10px",
              lineHeight: "25px",
              color: theme.palette.primary.black,
            }}
          >
            สรรเสริญและถวายเกียรติพระเจ้า <br />
            <span style={{ color: theme.palette.primary.main }}>
              (Praise and glorify God)
            </span>
          </li>
          <li
            style={{
              textAlign: "left",
              marginBottom: "10px",
              lineHeight: "25px",
              color: theme.palette.primary.black,
            }}
          >
            สั่งสอนและสร้างคนให้เป็นสาวกของพระเยซูคริสต์ <br />
            <span style={{ color: theme.palette.primary.main }}>
              (Preparing and equipping Christ’s disciples)
            </span>
          </li>
          <li
            style={{
              textAlign: "left",
              lineHeight: "25px",
              color: theme.palette.primary.black,
            }}
          >
            ส่งเสริมให้ทุกคนปฏิบัติตามพระมหาบัญชาขององค์พระเยซูคริสต์ <br />
            ซึ่งได้บันทึกไว้ในพระกิตติคุณมัทธิว 28:19-20 <br />
            <span style={{ color: theme.palette.primary.main }}>
              (Promote the obedience of Jesus command in Matthew 28:19-20)
            </span>
          </li>
        </Box>
      </Container>
    </Container>
  );
};

export default Missions;

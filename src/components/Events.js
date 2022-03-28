import { Typography, Box, Button } from "@mui/material";
import Event from "./Event";

const Events = (props) => {
  const events = [
    {
      title: "Thai Church DC Easter",
      dateTime: "SUNDAY, APRIL 17, 2022 AT 11:30 PM",
      location: "Thai Church DC -  3910 Lorcom Lane Arlington, VA 22207.",
      image:
        "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/277001342_10227107904191954_2698984566983476786_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=340051&_nc_ohc=26RiyWkXRCsAX8Ldgeg&_nc_ht=scontent.fagc1-2.fna&oh=00_AT-VfoUzZzhcTprAaYR7KoopfIZWJ_8_5I8lo8j_DACueg&oe=6245B2F0",
      link: "https://fb.me/e/5eiIhBb8r",
      detail:
        "Join us as we celebrate Easter on Sunday, April 17 at 11:30 am. We will have egg hunt for the children and potluck lunch after the service.",
    },
    {
      title: "คริสต์มาสคนเมือง Northern Thai Christmas",
      dateTime: "SUNDAY, DECEMBER 19, 2021 AT 11:30 AM",
      location: "Thai Church DC -  3910 Lorcom Lane Arlington, VA 22207.",

      image:
        "https://scontent.fagc1-1.fna.fbcdn.net/v/t39.30808-6/261683023_10226536558988681_3104353810534978662_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=340051&_nc_ohc=jwaAJnHVwDYAX-CkxY_&_nc_ht=scontent.fagc1-1.fna&oh=00_AT8gsmHKT8l36OhOKkmeafy-Xb5JEyWbM8o8OQAy5An9Xw&oe=62461751",
      link: "https://fb.me/e/4iKHhnNju",
      detail:
        "คริสต์มาสก่อนโควิดเราจัดคริสต์มาสบ้านข่อย ปีนี้คริสตจักรไทยดีซีขอเชิญทุกท่านมาร่วมงานคริสต์มาสคนเมือง พระเจ้าทรงเป็นพระเจ้าของคนทุกชาติ ทุกเผ่าพันธุ์ เราจะมีรำชาวเหนือ อาหารเหนือ ข้าวนึ่ง ไส้อั่ว น้ำพริกอ่อง ข้าวซอยไก่ ขนมจีนน้ำเงี้ยว แหนมกระดูกหมู เทศนาโดยอาจารย์คนเมือง ใส่ชุดเหนือมาสนุกๆกัน เรามีของขวัญให้เด็กๆทุกคนค่า You are invited to Northern Thai Christmas. Couple years ago, we had Northeast Thai Christmas. We will have Northern Thai dance, Northern Thai food and preacher from Northern Thailand. We will have gift for all children. Dress Northern Thai just for fun.",
    },
    {
      title: "Thai Church DC Outdoor Worship and Fellowship",
      dateTime: "SUNDAY, OCTOBER 3, 2021 AT 11 AM",
      location: "Lady Baines Johnson Memorial Grove",

      image:
        "https://scontent.fagc1-2.fna.fbcdn.net/v/t39.30808-6/240389407_10226162968649156_1578835197848198214_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=340051&_nc_ohc=l3DpCVCfxU8AX-oXdr2&_nc_ht=scontent.fagc1-2.fna&oh=00_AT8rBqpVLrV6yo_00_e0Y8q1JBm91q3KCeTf-mIQ7FFuwA&oe=62460B12",
      link: "https://fb.me/e/2wyccBrH4",
      detail:
        "Come join Thai Church DC monthly worship and fellowship. Bring a lawn chair and picnic lunch.",
    },
    // {
    //   title: "",
    //   dateTime: "",
    //   location: "",
    //   image: "",
    //   link: "",
    //   detail: "",
    // },
  ];

  return (
    <div
      id="events"
      style={{
        width: "100%",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#eeeeee",
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
        Events
      </Typography>
      {events.map((event) => (
        <Event event={event} key={event.link} />
      ))}
      <Button
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          color: "#ffffff",
          marginTop: "20px",
        }}
        variant="contained"
        href="https://www.facebook.com/groups/thaichurchdc/events"
        target="_blank"
        color="secondary"
      >
        See All Events
      </Button>
    </div>
  );
};

export default Events;
